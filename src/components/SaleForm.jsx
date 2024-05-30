import { Controller, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useSales from "../hooks/useSales";

export default function SaleForm({ onClose}) {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const products = watch("products");
  const {refetch} = useSales();

  function onSubmit(values) {
  
        const sales = JSON.parse(localStorage.getItem("sales")) || [];
        sales.push(values);
        localStorage.setItem("sales", JSON.stringify(sales));
        refetch(); // Refetch data after submission
        reset(); // Reset the form fields
        onClose(); // Close the modal
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.id}>
        <FormLabel htmlFor="name">ID</FormLabel>
        <Input
          id="id"
          placeholder="id"
          {...register("id", {
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 2" },
          })}
        />
        <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
      </FormControl>

      {/* products */}
      <FormControl isInvalid={errors.products}>
        <FormLabel htmlFor="products">Products</FormLabel>
        <Select
          id="products"
          options={[
            { value: "product1", label: "Product 1" },
            { value: "product2", label: "Product 2" },
            { value: "product3", label: "Product 3" },
            // Add more product options as needed
          ]}
          placeholder="Select products"
          closeMenuOnSelect={false}
          isMulti
          value={
            products
              ? products.map((value) => ({
                  value,
                  label: value,
                }))
              : []
          }
          onChange={(selectedOptions) =>
            setValue(
              "products",
              selectedOptions
                ? selectedOptions.map((option) => option.value)
                : []
            )
          }
        />
        <FormErrorMessage>
          {errors.products && errors.products.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.price}>
        <FormLabel htmlFor="name">Price</FormLabel>
        <Input
          id="price"
          placeholder="price"
          {...register("price", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 2" },
          })}
        />
        <FormErrorMessage>
          {errors.price && errors.price.message}
        </FormErrorMessage>
      </FormControl>

      {/* date */}
      <FormControl isInvalid={errors.date}>
        <FormLabel htmlFor="date">Invoice Date</FormLabel>
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          rules={{ required: "This is required" }}
          render={({ field }) => (
            <DatePicker
              id="date"
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy/MM/dd"
              customInput={<Input />}
            />
          )}
        />
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
