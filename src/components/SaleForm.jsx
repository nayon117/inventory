import { useEffect } from 'react';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Checkbox,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast, { Toaster } from 'react-hot-toast';

import useSales from '../hooks/useSales';

const productsOptions = [
  { value: 220, label: 'Product 22', remaining: 104, rate: 324 },
  { value: 221, label: 'Product 5', remaining: 46, rate: 300 },
  { value: 222, label: 'Stocked I', remaining: 76, rate: 310 },
  // Add more product options as needed
];

export default function SaleForm({ sale, onClose }) {
  const { handleSubmit, register, watch, reset, control, formState: { errors, isSubmitting } } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  const isEditMode = !!sale;
  const { refetch } = useSales();

  useEffect(() => {
    if (sale) {
      reset(sale);
    }
  }, [sale, reset]);

  const onSubmit = async (values) => {
    const sales = JSON.parse(localStorage.getItem('sales')) || [];
    if (isEditMode) {
      const index = sales.findIndex((s) => s.invoice_no === values.invoice_no);
      if (index >= 0) {
        sales[index] = values;
      }
      toast.success('Sale updated successfully!');
    } else {
      sales.push(values);
      toast.success('Sale added successfully!');
    }

    localStorage.setItem('sales', JSON.stringify(sales));
    refetch(); 
    reset(); 
    onClose(); 
  };

  const selectedProducts = watch('selectedProducts') || [];
  useEffect(() => {
    // Sync items with selected products
    if (selectedProducts.length > fields.length) {
      selectedProducts.forEach(product => {
        if (!fields.some(item => item.sku_id === product.value)) {
          append({ sku_id: product.value, price: '', quantity: '' });
        }
      });
    }
    if (selectedProducts.length < fields.length) {
      fields.forEach((item, index) => {
        if (!selectedProducts.some(product => product.value === item.sku_id)) {
          remove(index);
        }
      });
    }
  }, [selectedProducts, fields, append, remove]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <FormControl isInvalid={errors.customer_id}>
        <FormLabel htmlFor="customer_id">Customer ID</FormLabel>
        <Input
          id="customer_id"
          placeholder="Customer ID"
          defaultValue={isEditMode ? sale.customer_id : ''}
          {...register('customer_id', { required: 'This is required' })}
        />
        <FormErrorMessage>{errors.customer_id && errors.customer_id.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.selectedProducts}>
        <FormLabel htmlFor="selectedProducts">All Products</FormLabel>
        <Controller
          name="selectedProducts"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={productsOptions}
              placeholder="Select Products"
              closeMenuOnSelect={false}
              isMulti
              getOptionLabel={option => `${option.label}`}
            />
          )}
        />
        <FormErrorMessage>{errors.selectedProducts && errors.selectedProducts.message}</FormErrorMessage>
      </FormControl>

      {fields.map((item, index) => {
        const product = productsOptions?.find(p => p.value === item.sku_id);
        return (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" p={4} mt={4}>
            <HStack justify="space-between">
              <Text>SKU {product?.value} ({product?.remaining} Item(s) Remaining)</Text>
              <Text>Rate: ₹ {product?.rate}</Text>
            </HStack>
            <VStack mt={2} spacing={2}>
              <FormControl isInvalid={errors.items?.[index]?.price}>
                <FormLabel htmlFor={`items.${index}.price`}>Selling Rate</FormLabel>
                <Input
                  id={`items.${index}.price`}
                  placeholder="Enter selling rate"
                  {...register(`items.${index}.price`, { required: 'This is required' })}
                />
                <FormErrorMessage>{errors.items?.[index]?.price && errors.items[index].price.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.items?.[index]?.quantity}>
                <FormLabel htmlFor={`items.${index}.quantity`}>Total Items</FormLabel>
                <Input
                  id={`items.${index}.quantity`}
                  placeholder="Enter Quantity"
                  {...register(`items.${index}.quantity`, { required: 'This is required' })}
                />
                <FormErrorMessage>{errors.items?.[index]?.quantity && errors.items[index].quantity.message}</FormErrorMessage>
              </FormControl>
            </VStack>
          </Box>
        );
      })}

      <FormControl isInvalid={errors.paid} mt={4}>
        <FormLabel htmlFor="paid">Paid</FormLabel>
        <Checkbox id="paid" {...register('paid')}>Paid</Checkbox>
        <FormErrorMessage>{errors.paid && errors.paid.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.invoice_no} mt={4}>
        <FormLabel htmlFor="invoice_no">Invoice No</FormLabel>
        <Input
          id="invoice_no"
          placeholder="Invoice No"
          defaultValue={isEditMode ? sale.invoice_no : ''}
          {...register('invoice_no', { required: 'This is required' })}
        />
        <FormErrorMessage>{errors.invoice_no && errors.invoice_no.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.invoice_date} mt={4}>
        <FormLabel htmlFor="invoice_date">Invoice Date</FormLabel>
        <Controller
          name="invoice_date"
          control={control}
          defaultValue={null}
          rules={{ required: 'This is required' }}
          render={({ field }) => (
            <DatePicker
              id="invoice_date"
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          )}
        />
        <FormErrorMessage>{errors.invoice_date && errors.invoice_date.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        {isEditMode ? 'Update' : 'Submit'}
      </Button>
    </form>
  );
}
