// schemas/product.js
const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "id",
        title: "ID",
        type: "string",
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "orderId",
        title: "Order ID",
        type: "string",
      },
      {
        name: "quantity",
        title: "Quantity",
        type: "number",
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
        description: "Total price of the order.",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Completed", value: "completed" },
            { title: "Cancelled", value: "cancelled" },
          ],
        },
      },
      {
        name: "productId",
        title: "Product ID",
        type: "reference",
        to: [{ type: "product" }],
    },
],
  };
  
  // schemas/customer.js
  const customer = {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "text",
    },
    {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
],
  };