# Tim Furlow Fine Art

## Ecommerce platform in NextJS

<hr>

## Description

Tim Furlow Fine Art is an e-commerce site that offers a range of high-quality art pieces created by Tim Furlow. The site features an easy-to-navigate interface that allows users to browse and purchase art pieces online. The site also includes an admin area that enables Tim Furlow and his team to manage orders, users, and inventory efficiently. To facilitate secure and hassle-free transactions, the site is integrated with PayPal for payment processing. With its user-friendly design and robust features, Tim Furlow Fine Art is an excellent platform for art enthusiasts to discover and acquire beautiful works of art.

<hr>

![Main View](https://github.com/miadugas/timfurlow_artsite/blob/main/tffa01.png)

## Issues platform

<!-- Removed JSON.Parse from Store.js lines #5-#18
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: Cookies.get('cartItems')
      ? (Cookies.get('cartItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
      ? (Cookies.get('shippingAddress'))
      : {},
  },
  userInfo: Cookies.get('userInfo')
    ? (Cookies.get('userInfo'))
    : null,
};
///////////////////
Math round2 in placeorder ??? check on that
///////////////////

-->

## Technology Used

MongoDB, Mongoose, Node.js, React, NextJS, Next Connect, React Hook Form
Streamifier, Multer, Cloudinary

<hr>

### Additional Styling & Non-Technical Frameworks

MaterialUI, Dark Mode, PayPal developer API

<hr>

### Future Modifications & Considerations

<hr>

## License

MIT License

Copyright (c) [2021] [MiaDugas]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
