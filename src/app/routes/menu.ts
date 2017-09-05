

const manageProduct = {
    text: 'Manage Product',
    link: '/manageproduct',
    icon: 'fa fa-product-hunt',
    active: true,
    activeLinks: ['/manageproduct']
};
const manageProfile = {
    text: 'Manage Profile',
    link: '/manageprofile',
    icon: 'fa fa-user-circle',
    active: false,
    activeLinks: ['/manageprofile']
};
const manageMasterdata = {
    text: 'Manage Masterdata',
    link: '/managemasterdata',
    icon: 'fa fa-table',
    active: false,
    activeLinks: ['/managemasterdata']
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};


export const menu = [
    manageProduct,
    manageProfile,
    manageMasterdata

];

export const navigationMenu = [
    manageProduct,
    manageProfile,
    manageMasterdata
];


