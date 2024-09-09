import React from "react";
import Header from "../../components/Header";
import "../../index.css";

function PricingPlans() {
  return (
    <div>
      <Header />
      <div className="w-full bg-[#FFD1DC] font-bold text-5xl text-[#252B61] text-center p-5">
        Caremate +
      </div>
      <br></br>
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-[#252B61] mb-8">
          Subscription Plans for Caremate +
        </h2>
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-[#FFD1DC] text-[#252B61]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Plan</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Features
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Free Plan */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Free Plan
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">Free</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Access to basic hospital search features, allowing consumers to
                find hospitals near them at no cost.
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  <li>✔ Find Nearest Hospitals</li>
                  <li>✔ Basic Search Filters</li>
                  <li>✔ Real-Time Availability Updates</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="bg-[#A3df45] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Get Started
                </button>
              </td>
            </tr>
            {/* Basic Plan */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Basic Plan
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$9.99/month</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Includes access to the ML Predictor and initial free uses of
                therapy chatbot and medical assistance features.
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  <li>✔ ML Predictor for Health Insights</li>
                  <li>✔ 3 Free Uses of Therapy Chatbot</li>
                  <li>✔ 3 Free Medical Assistance Requests</li>
                  <li>✔ Access to Personal Health Records</li>
                  <li>✔ Email Support</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="bg-[#A3DAC2] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Choose Plan
                </button>
              </td>
            </tr>
            {/* Standard Plan */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Standard Plan
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$19.99/month</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Enhanced access to all features, including additional uses of
                the therapy chatbot and medical assistance.
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  <li>✔ ML Predictor for Health Insights</li>
                  <li>✔ 10 Free Uses of Therapy Chatbot</li>
                  <li>✔ 10 Free Medical Assistance Requests</li>
                  <li>
                    ✔ Access to Personal Health Records for up to 4 Family
                    Members
                  </li>
                  <li>✔ Phone & Email Support</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="bg-[#F0DA69] text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Choose Plan
                </button>
              </td>
            </tr>
            {/* Premium Plan */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Premium Plan
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">$29.99/month</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Comprehensive plan offering unlimited access to all features,
                ideal for healthcare professionals or clinics.
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  <li>✔ Unlimited ML Predictor Access</li>
                  <li>✔ Unlimited Uses of Therapy Chatbot</li>
                  <li>✔ Unlimited Medical Assistance Requests</li>
                  <li>✔ Unlimited Access to Personal Health Records</li>
                  <li>✔ 24/7 Support with Dedicated Health Advisor</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="bg-[#B3BEF2] text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                  Choose Plan
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <footer className="bg-[#ffd1dc] text-[#252b61] py-8">
        <div className="container mx-auto flex flex-row md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <p className="font-bold text-5xl">Caremate</p>
          </div>

          {/* Links Section */}
          <div className="flex ">
            <ul className="flex flex-col justify-center items-center gap-3">
              <li>
                <p className="hover:text-gray-400">
                  Facebook
                </p>
              </li>
              <li>
                <p className="hover:text-gray-400">
                  Twitter
                </p>
              </li>
              <li>
                <p className="hover:text-gray-400">
                  Instagram
                </p>
              </li>
              <li>
                <p className="hover:text-gray-400">
                  LinkedIn
                </p>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingPlans;
