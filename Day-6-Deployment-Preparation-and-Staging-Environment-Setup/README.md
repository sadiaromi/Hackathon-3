# Day 6: Marketplace Deployment and Staging Environment Setup

## Project Summary
On Day 6, I focused on the **deployment preparation** and **staging environment setup** for the marketplace project. The application was built using **Next.js**, styled with **Tailwind CSS**, and integrated with **Sanity CMS** for content management. Below are the steps I followed for setting up deployment and ensuring the project works smoothly in the staging environment.

## Deployment Setup

### Hosting Platform: Vercel

**GitHub Repository**: [Github URL](https://github.com/sadiaromi/hackathon-figma-template/tree/main)

### GitHub Repository 
- Created a **GitHub repository** for the project.
- Integrated the GitHub repository with **Vercel** for continuous integration and deployment.

### Environment Variables
To deploy the project, I securely configured the following environment variables in the Vercel dashboard:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`='your_project_id'
- `NEXT_PUBLIC_SANITY_DATASET`='production'

## Deployment Process

### Step 1: Project Configuration on Vercel
- Integrated the **GitHub repository** with **Vercel** for automatic deployments.
- Set up the build configuration to work seamlessly with **Next.js**.

### Step 2: Deploy the Project to Staging
- The application was successfully deployed to the **staging environment** for testing and review.

**Staging Environment URL**: [Staging URL](https://hackathon-figma-template-iota.vercel.app/)

### Step 3: Validate the Deployment
- Thoroughly checked the functionality of the app on the staging site to ensure proper operation.
- Verified that all content was correctly retrieved from **Sanity CMS** and displayed as expected.

### Step 4: Sanity CMS CORS Configuration
- Added the required **CORS origin** in the **Sanity dashboard** to enable secure communication between **Sanity CMS** and **Vercel**.
- This setup ensures that **Vercel** can fetch content from **Sanity CMS** without facing cross-origin resource sharing (CORS) issues.


This marks the completion of the staging and deployment setup for the marketplace project!
