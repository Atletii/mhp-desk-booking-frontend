# Frontend Documentation for MHP Desk Booking Application

## Overview

This document outlines the frontend architecture of the MHP Desk Booking Application, developed with Next.js 14. It serves as a guide for setup, deployment, and understanding the codebase's structure and features.

## Prerequisites

- Node.js (LTS)
- Yarn or npm
- Git (for version control)

## Getting Started

1. Installation

   - Clone the repository: `git clone repository-url`
   - Install dependencies: `yarn install` or `npm install`

2. Running the application
   - Development server: `yarn dev` or `npm run dev`
   - Production build: `yarn build` or `npm run build`

## System Architecture

- App Directory: Utilizing Next.js's file-based routing system.
- Components Directory: Reusable components such as buttons, input fields, etc.
- Public Directory: Static assets like images, logos, fonts, etc.
- Contexts Directory: React contexts for state management across the application.

## Features

- User Authentication: Registration and login flows with security considerations.
- Desk Booking: Interactive floor map interface for desk selection and booking.
- Cancellation: Ability for users to cancel their bookings.
- Responsive Design: Adaptable UI for mobile, tablet, and desktop views.
- API Integration: Communication with backend services via RESTful APIs. (Java Spring & Python Microservice)

## Tailwind CSS for Styling

- We use Tailwind CSS for styling our components, allowing for rapid UI development with its utility-first approach. It enables us to maintain consistency in design while keeping the styling customizable and scalable.

## Reusable Components

- Our project leverages reusable components to streamline the development process. This approach enhances the project's maintainability and allows for quicker iterations and feature implementations.

## Benefits of Using Next.js 14

- Hybrid Static & Server Rendering: Improved performance with SSR (Server-Side Rendering) and SSG (Static Site Generation) capabilities.
- Image Optimization: Built-in `Image` component for automatic image optimization.
- File-Based Routing: Intuitive page-based routing system.
- Fast Refresh: Instant feedback when editing modules with no loss of state.
- Incremental Static Regeneration: Update static content without rebuilding the entire site.

## Security Measures

- Authentication: Using FireBase for secure user authentication.
- Input Sanitization: Preventing injection attacks by sanitizing user inputs.
- HTTPS Enforcement: Utilizing secure protocols for data transmission.
