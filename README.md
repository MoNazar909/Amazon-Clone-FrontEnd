# Amazon Clone Front-End Web Project

## Project Overview
This project is a front-end clone of the Amazon website, designed to replicate the look and feel of the original site. It features a dynamic user interface with interactive elements such as a header image slider and horizontal product scrolling, closely mimicking Amazon's user experience.

![Amazon Clone Front-End Web Project Screenshot](assets/Amazon%20Clone%20Front-End%20Web%20Project%20SS.png "Project Screenshot")


## Key Features

### Navigation Bar
- **Amazon Logo**: Redirects to the homepage.
- **Delivery Location**: Shows the current delivery location with an icon.
- **Search Bar**: Includes a category dropdown and a search input field.
- **Language Option**: Allows switching the website language.
- **Account and Lists**: Dropdown menu for account and list options.
- **Returns & Orders**: Quick link to view returns and orders.
- **Shopping Cart**: Displays the number of items in the cart.

### Header Slider
- **Dynamic Image Slider**: Cycles through promotional images with previous and next controls.
- **Responsive Design**: Adjusts to fit various screen sizes.

### Product Showcase
- **Horizontal Scrolling**: Users can scroll horizontally through product lists in various categories.
- **Best Sellers & Deals**: Highlighted sections for best-selling items and special deals.
- **Product Cards**: Display product images, prices, and promotional offers.

### Footer
- **Copyright Information**: Includes Amazon's copyright notice.
- **Compact Design**: Contains essential links and information in a clean layout.

## Technologies Used
- **HTML5**: For structuring the content.
- **CSS3**: For styling the website, ensuring responsiveness and cross-browser compatibility.
- **JavaScript**: To add interactivity, such as the header slider and horizontal scrolling functionality.

## Implementation Details

### Header Slider
The header slider is implemented using JavaScript, allowing users to navigate through promotional images. It uses an array to store image elements and controls for previous and next navigation. The `changeSlide` function updates the display property to show the current image and hide others.

### Horizontal Product Scrolling
This feature enables users to scroll through products horizontally within their containers. It's achieved by adding an event listener to each product container, which modifies the scroll position based on the user's scroll input.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the project.
3. Explore the features by interacting with the navigation bar, header slider, and product showcases.