export const aboutUsMenu = [
    {
        category: null,
        submenus: [
            {
                name: 'Ace history',
                link: '/about/history'
            },
            {
                name: 'VMGC',
                link: '/about/vmgc'
            }

        ]
    }
]

export const servicesFacilities = [
    {
        category: null,
        submenus: [
            {
                name: 'All Services',
                link: '/services'
            },
            {
                name: 'Facilities',
                link: '/facilities'
            }

        ]
    }
]

export const doctors = [
    {
        category: null,
        submenus: [
            {
                name: 'Founder’s names with clinic’s schedules',
                link: '/doctors/schedules'
            }

        ]
    }
]

export const patients = [
    {
        category: null,
        submenus: [
            {
                name: 'General Rules',
                link: '/patients/general-rules',
                type: 'single'
            }

        ]
    },
    {
        category: "Admission",
        submenus: [
            {
                name: 'Pre-admission',
                link: '/patients/admission/pre-admission'
            },
            {
                name: 'Preferred Room',
                link: '/patients/admission/preferred-room'
            },
            {
                name: 'Room Transfer/ Room Reservations',
                link: '/patients/admission/room-transfer-reservation'
            },
            {
                name: 'Dietary Services',
                link: '/patients/admission/dietary-services'
            },
            {
                name: 'Patient’s Discharge',
                link: '/patients/admission/patient-discharge'
            },

        ]
    },
    {
        category: "Billing",
        submenus: [
            {
                name: 'Senior Citizen, Philhealth, HMO and other Discount Benefits',
                link: '/patients/billing/discounts'
            },
            {
                name: 'Philhealth Reminders',
                link: '/patients/billing/phic-reminders'
            },
            {
                name: 'Affiliated HMO',
                link: '/patients/billing/affiliated-hmo'
            }

        ]
    },
    {
        category: "Visitor Reference",
        submenus: [
            {
                name: 'Visiting Hours Regulation',
                link: '/patients/visitors/visiting-hours-regulations'
            },
            {
                name: 'Safety and Security Guidelines',
                link: '/patients/visitors/safety-security-guidelines'
            },
            {
                name: 'Reminders',
                link: '/patients/visitors/reminders'
            }

        ]
    }, {
        category: null,
        submenus: [
            {
                name: 'Patient’s Rights',
                link: '/patients/rights',
                type: 'single'
            }

        ]
    }
]

export const AllMenu = [
    {
        title: "About US",
        path: "/about",
        icon: "fas fa-hospital-alt",
        subContent: []
    },
    {
        title: "Services",
        path: "/services",
        icon: "fas fa-newspaper",
        subContent: []
    },
    {
        title: "Doctors",
        path: "/doctors",
        icon: "fas fa-user",
        // icon: "fas fa-newspaper",
        subContent: []
    },
    {
        title: "Patients and Visitors Guide",
        path: null,
        subContent: [
            {
                category: null,
                submenus: [
                    {
                        name: 'General Rules',
                        link: '/patients/general-rules',
                        type: 'single'
                    }

                ]
            },
            {
                category: "Admission",
                submenus: [
                    {
                        name: 'Pre-admission',
                        link: '/patients/admission/pre-admission'
                    },
                    {
                        name: 'Preferred Room',
                        link: '/patients/admission/preferred-room'
                    },
                    {
                        name: 'Room Transfer/ Room Reservations',
                        link: '/patients/admission/room-transfer-reservation'
                    },
                    {
                        name: 'Dietary Services',
                        link: '/patients/admission/dietary-services'
                    },
                    {
                        name: 'Patient’s Discharge',
                        link: '/patients/admission/patient-discharge'
                    },

                ]
            },
            {
                category: "Billing",
                submenus: [
                    {
                        name: 'Senior Citizen, Philhealth, HMO and other Discount Benefits',
                        link: '/patients/billing/discounts'
                    },
                    {
                        name: 'Philhealth Reminders',
                        link: '/patients/billing/phic-reminders'
                    },
                    {
                        name: 'Affiliated HMO',
                        link: '/patients/billing/affiliated-hmo'
                    }

                ]
            },
            {
                category: "Visitor Reference",
                submenus: [
                    {
                        name: 'Visiting Hours Regulation',
                        link: '/patients/visitors/visiting-hours-regulations'
                    },
                    {
                        name: 'Safety and Security Guidelines',
                        link: '/patients/visitors/safety-security-guidelines'
                    },
                    {
                        name: 'Reminders',
                        link: '/patients/visitors/reminders'
                    }

                ]
            }, {
                category: null,
                submenus: [
                    {
                        name: 'Patient’s Rights',
                        link: '/patients/rights',
                        type: 'single'
                    }

                ]
            }
        ],
        icon: "fas fa-hospital-user"
    },
    {
        title: "News and Events",
        path: "/news-events",
        icon: "fas fa-newspaper",
        subContent: []
    },
    {
        title: "Careers",
        path: "/careers",
        icon: "fas fa-users",
        subContent: []
    },
    {
        title: "Contacts",
        path: "/contact",
        icon: "fas fa-users",
        subContent: []
    }

]