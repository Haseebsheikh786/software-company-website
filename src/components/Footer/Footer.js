import React from "react";
import logo from "../../assets/images/logo2.jpg";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { MdMail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        </div>
      <div className="footer-row">
        <nav className="footer-nav">
          <NavLink to="/FAQ">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </div>

      <div className="footer-row">
        <div className="footer-social">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://twitter.com">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com">
            <MdMail />
          </a>
          <a href="tel:+923427282514" style={{ textDecoration: "none" }}>
            <MdPhone />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <p>&copy; 2024 CODE ZENTO. All rights reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer;
// child    :       <template>
//   <div class="d-flex flex-column mt-5 pt-5 text-center">
//     <h3>All images</h3>
//     <ul class="">
//       <li v-for="image in images" :key="image.id">
//         <div
//           @click="toggleImageSelection(image)"
//           :class="{ selected: isSelected(image) }"
//           class="my-3"
//         >
//           <img :src="image.url" />
//           {{ image.id }}
//           <span v-if="isSelected(image)">:heavy_tick:</span>
//         </div>
//       </li>
//     </ul>
//     <!-- Buttons to save and close -->
//     <button @click="saveSelectedImages">Save</button>
//     <button @click="closeSelector">Close</button>
//   </div>
// </template>
// <script setup>
// import { ref } from 'vue'
// // Define props for the image type and initial selected images
// const props = defineProps({
//   imageType: String,
//   initialSelectedImages: {
//     type: Array,
//     default: () => []
//   }
// })
// // State for tracking selected images
// const selectedImages = ref([...props.initialSelectedImages])
// // Check if an image is selected
// const isSelected = (image) => {
//   return selectedImages.value.some((img) => img.id === image.id)
// }
// // Toggle image selection
// const toggleImageSelection = (image) => {
//   if (isSelected(image)) {
//     // If selected, remove it
//     selectedImages.value = selectedImages.value.filter((img) => img.id !== image.id)
//   } else {
//     // If not selected, add it
//     selectedImages.value.push(image)
//   }
// }
// // Emit events to save and close the selector
// const emit = defineEmits(['imagesSaved', 'close'])
// const saveSelectedImages = () => {
//   emit('imagesSaved', selectedImages.value) // Emit the list of selected images
// }
// const closeSelector = () => {
//   emit('close') // Close without saving
// }
// // Dynamic image data based on imageType
// const data = [
//   {
//     id: 1,
//     url: 'https://tse1.mm.bing.net/th?id=OIP.0h0bJ8eOUuOjKM_ZM5-mdwHaEK&pid=Api&P=0&h=220'
//   },
//   {
//     id: 2,
//     url: 'https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=220'
//   },
//   {
//     id: 3,
//     url: 'https://tse1.mm.bing.net/th?id=OIP.o2IuGpviRtySTSEudThAcQHaFj&pid=Api&P=0&h=220'
//   },
//   {
//     id: 4,
//     url: 'https://tse1.mm.bing.net/th?id=OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj&pid=Api&P=0&h=220'
//   },
//   {
//     id: 5,
//     url: 'https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=220'
//   },
//   {
//     id: 6,
//     url: 'https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=220'
//   }
// ]
// const images = ref(data)
// </script>
// <style>
// /* Style for selected images */
// .selected {
//   border: 2px solid green;
// }
// </style>

// (21 kB)
// https://tse1.mm.bing.net/th?id=OIP.0h0bJ8eOUuOjKM_ZM5-mdwHaEK&pid=Api&P=0&h=220

// (13 kB)
// https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=220

// (17 kB)
// https://tse1.mm.bing.net/th?id=OIP.o2IuGpviRtySTSEudThAcQHaFj&pid=Api&P=0&h=220

// (9 kB)
// https://tse1.mm.bing.net/th?id=OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj&pid=Api&P=0&h=220

// (16 kB)
// https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=220

// 1:16
// single <template>
//   <div >
//     <button class="btn btn-danger m-5" @click="openSelector">Select an Image</button>
//     <div v-if="selectedImages.length">
//       <h3>Selected Images</h3>
//       <ul>
//         <li v-for="image in selectedImages" :key="image.id">
//           <img :src="image.url" />
//         </li>
//       </ul>
//     </div>
//     <!-- Conditional rendering of the ImageSelector component -->
//     <ImageSelector
//       v-if="showSelector"
//       :imageType="'gallery'"
//       :initialSelectedImages="selectedImages"
//       @imagesSaved="handleImagesSaved"
//       @close="closeSelector"
//     />
//   </div>
// </template>
// <script setup>
// import { ref } from 'vue';
// import ImageSelector from './ImageSelector.vue';
// const showSelector = ref(false);
// const selectedImages = ref([]);
// const openSelector = () => {
//   showSelector.value = true;
// };
// const closeSelector = () => {
//   showSelector.value = false;
// };
// const handleImagesSaved = (images) => {
//   selectedImages.value = images; // Save the selected images
//   closeSelector(); // Close the selector
// };
// </script>
// 1:17
// multiple<template>
//   <div>
//     <button class="m-3 btn btn-primary" @click="openSelector('thumbnail')">Select Thumbnail Images</button>
//     <button class="m-3 btn btn-primary" @click="openSelector('meta_image')">Select Meta Images</button>
//     <button class="m-3 btn btn-primary" @click="openSelector('gallery')">Select Gallery Images</button>
//     <div class="d-flex justify-content-between m-5">
//       <div>
//         <h3>Selected Thumbnail Images</h3>
//         <ul>
//           <li v-for="image in selectedThumbnails" :key="image.id">
//             <img :src="image.url" /> {{ image.id }}
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h3>Selected Meta Images</h3>
//         <ul>
//           <li v-for="image in selectedMetaImages" :key="image.id">
//             <img :src="image.url" /> {{ image.id }}
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h3>Selected Gallery Images</h3>
//         <ul>
//           <li v-for="image in selectedGalleryImages" :key="image.id">
//             <img :src="image.url" /> {{ image.id }}
//           </li>
//         </ul>
//       </div>
//     </div>
//     <!-- Conditional rendering of the ImageSelector component -->
//     <ImageSelector
//       v-if="showSelector"
//       :imageType="currentType"
//       :initialSelectedImages="getSelectedImagesByType(currentType)"
//       @imagesSaved="handleImagesSaved"
//       @close="closeSelector"
//     />
//   </div>
// </template>
// <script setup>
// import { ref } from 'vue';
// import ImageSelector from './ImageSelector.vue';
// const showSelector = ref(false);
// const currentType = ref(null);
// const selectedThumbnails = ref([]);
// const selectedMetaImages = ref([]);
// const selectedGalleryImages = ref([]);
// const openSelector = (type) => {
//   currentType.value = type;
//   showSelector.value = true;
// };
// const closeSelector = () => {
//   showSelector.value = false;
// };
// const handleImagesSaved = (images) => {
//   if (currentType.value === 'thumbnail') {
//     selectedThumbnails.value = images;
//   } else if (currentType.value === 'meta_image') {
//     selectedMetaImages.value = images;
//   } else if (currentType.value === 'gallery') {
//     selectedGalleryImages.value = images;
//   }
//   closeSelector();
// };
// const getSelectedImagesByType = (type) => {
//   if (type === 'thumbnail') {
//     return selectedThumbnails.value;
//   } else if (type === 'meta_image') {
//     return selectedMetaImages.value;
//   } else if (type === 'gallery') {
//     return selectedGalleryImages.value;
//   }
//   return [];
// };
// </script>
