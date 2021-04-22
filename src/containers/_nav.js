import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Customer Details"],
    icon: 'cil-user',
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Customer",
    to: "/customer",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customer Details",
    to: "/customerDetails",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Booking Details"],
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Booking',
    route: '/icons',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List Bookings',
        to: '/listBooking',
        icon: "cil-list",
        badge: {
          color: 'success',
        },
      },
      {
        _tag: "CSidebarNavItem",
    name: "Booking",
    to: "/addBooking",
    icon: "cil-cursor",
    badge: {
      color: "success",
    },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List Images',
        to: '/listImages',
        icon: "cil-list",
        badge: {
          color: 'success',
        },
      },
      
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Vehicle Details"],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Vehicle",
  //   to: "/addTruck",
  //   icon: "cli-truck",
  // },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vehicle Details',
    route: '/icons',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List Vehicle',
        to: '/listVehicles',
        icon: "cil-list",
        badge: {
          color: 'success',
        },
      },
      {
        _tag: "CSidebarNavItem",
    name: "Add Vehicles",
    to: "/addTruck",
    icon: "cil-cursor",
    badge: {
      color: "success",
    },
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["SMS"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "SMS",
    to: "/sms",
    icon: <CIcon name="cil-message" customClasses="c-sidebar-nav-icon" />,
  },



  
];

export default _nav;
