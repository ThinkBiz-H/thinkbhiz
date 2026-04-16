// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./assets/Component/Navbar";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Services from "./pages/Services.jsx";
// import Contact from "./pages/Contact.jsx";
// import Industries from "./pages/Industries.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Career from "./pages/Career.jsx";
// import Policies from "./pages/Policies.jsx";
// import Admin from "./pages/Admin.jsx";
// import Blog from "./pages/Blog.jsx";
// import BlogDetail from "./pages/BlogDetail.jsx";
// import Footer from "./assets/Component/Footer.jsx";
// import TermsAndConditions from "./pages/TermsAndConditions.jsx";
// import ShippingAndDelivery from "./pages/ShippingAndDelivery.jsx";
// import CancellationAndRefund from "./pages/CancellationAndRefund.jsx";
// import ScrollToTop from "./assets/Component/ScrollToTop";
// import TrackAnalytics from "./TrackAnalytics";
// import { HelmetProvider } from "react-helmet-async";
// import DigitalMarketing from "./pages/Digitalmarketing.jsx";

// const App = () => {
//   return (
//     <HelmetProvider>
//       <Router>
//         <ScrollToTop />

//         {/* Google Analytics Page View Tracker */}
//         <TrackAnalytics />

//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service/:serviceName" element={<Services />} />
//           <Route path="/contact-US" element={<Contact />} />
//           <Route path="/industries" element={<Industries />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/policies" element={<Policies />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route
//             path="/terms-and-conditions"
//             element={<TermsAndConditions />}
//           />
//           <Route
//             path="/digital-marketing-agency-in-Australia"
//             element={<DigitalMarketing />}
//           />
//           <Route
//             path="/shipping-and-delivery"
//             element={<ShippingAndDelivery />}
//           />
//           <Route
//             path="/cancellation-and-refund"
//             element={<CancellationAndRefund />}
//           />
//           {/* Blog routes */}
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//         </Routes>

//         <Footer />
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/Component/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Industries from "./pages/Industries.jsx";
import Pricing from "./pages/Pricing.jsx";
import Career from "./pages/Career.jsx";
import Policies from "./pages/Policies.jsx";
import Admin from "./pages/Admin.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Footer from "./assets/Component/Footer.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import ShippingAndDelivery from "./pages/ShippingAndDelivery.jsx";
import CancellationAndRefund from "./pages/CancellationAndRefund.jsx";
import ScrollToTop from "./assets/Component/ScrollToTop";
import TrackAnalytics from "./TrackAnalytics";
import { HelmetProvider } from "react-helmet-async";
import DigitalMarketing from "./pages/Digitalmarketing.jsx";
import AustraliaBlog from "./pages/AustraliaBlog.jsx";

/* 🔥 ADD THIS */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        {/* Google Analytics Page View Tracker */}
        <TrackAnalytics />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:serviceName" element={<Services />} />
          <Route path="/contact-US" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/career" element={<Career />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/digital-marketing-agency-in-Australia"
            element={<DigitalMarketing />}
          />
          <Route
            path="/shipping-and-delivery"
            element={<ShippingAndDelivery />}
          />
          <Route
            path="/cancellation-and-refund"
            element={<CancellationAndRefund />}
          />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route
            path="/blog/digital-marketing-agency-australia-2026"
            element={<AustraliaBlog />}
          />
        </Routes>

        <Footer />

        {/* 🔥 GLOBAL TOASTER */}
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      </Router>
    </HelmetProvider>
  );
};

export default App;
