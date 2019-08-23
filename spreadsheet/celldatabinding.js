syncApp.controller('SpreadsheetCtrl', function ($scope,$rootScope) {
    $scope.sheetData = [{
        rows: [
            {
                height: 30,
                cells: [
                    { value: "Item Name", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                    { value: "Quantity", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                    { value: "Price", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                    { value: "Amount", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                    { value: "Stock Detail", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                    { value: "Website", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } }
                ]
            },
            {
                cells: [
                    { value: "Casual Shoes", comment: { value: "Casual Footwears with wide variety of colors." } },
                    { value: "10" },
                    { value: "20", format: { type: "currency" } },
                    { value: "=B2*C2" },
                    { value: "OUT OF STOCK" },
                    { value: "Amazon", hyperlink: { webAddr: "www.amazon.com" } }
                ]
            },
            {
                cells: [
                    { value: "Sports Shoes", style: { "background-color": "#E5F3FF" } },
                    { value: "20", style: { "background-color": "#E5F3FF" } },
                    { value: "30", format: { type: "currency" }, style: { "background-color": "#E5F3FF" } },
                    { value: "=B3*C3", style: { "background-color": "#E5F3FF" } },
                    { value: "IN STOCK", style: { "background-color": "#E5F3FF" } },
                    { value: "AliExpress", hyperlink: { webAddr: "www.aliexpress.com" }, style: { "background-color": "#E5F3FF" } }
                ]
            },
        {
            cells: [
                { value: "Formal Shoes", comment: { value: "Formal Footwears with wide range of sizes." } },
                { value: "20" },
                { value: "15", format: { type: "currency" } },
                { value: "=B4*C4" },
                { value: "IN STOCK" },
                { value: "Amazon", hyperlink: { webAddr: "www.amazon.com" } }
            ]
        },
        {
            cells: [
                { value: "Sandals & Floaters", style: { "background-color": "#E5F3FF" } },
                { value: "15", style: { "background-color": "#E5F3FF" } },
                { value: "20", format: { type: "currency" }, style: { "background-color": "#E5F3FF" } },
                { value: "=B5*C5", style: { "background-color": "#E5F3FF" } },
                { value: "OUT OF STOCK", style: { "background-color": "#E5F3FF" } },
                { value: "Alibaba", hyperlink: { webAddr: "www.alibaba.com" }, style: { "background-color": "#E5F3FF" } }
            ]
        },
        {
            cells: [
                { value: "Flip-Flops & Slippers" },
                { value: "30" },
                { value: "10", format: { type: "currency" } },
                { value: "=B6*C6" },
                { value: "IN STOCK" },
                { value: "Ebay", hyperlink: { webAddr: "www.ebay.com" } }
            ]
        },
        {
            cells: [
                { value: "Sneakers", style: { "background-color": "#E5F3FF" }, comment: { value: "Sneakers with recent designs." } },
                { value: "40", style: { "background-color": "#E5F3FF" } },
                { value: "20", format: { type: "currency" }, style: { "background-color": "#E5F3FF" } },
                { value: "=B7*C7", style: { "background-color": "#E5F3FF" } },
                { value: "OUT OF STOCK", style: { "background-color": "#E5F3FF" } },
                { value: "Amazon", hyperlink: { webAddr: "www.amazon.com" }, style: { "background-color": "#E5F3FF" } }
            ]
        },
        {
            cells: [
                { value: "Running Shoes" },
                { value: "20" },
                { value: "10", format: { type: "currency" } },
                { value: "=B8*C8" },
                { value: "IN STOCK" },
                { value: "AliExpress", hyperlink: { webAddr: "www.aliexpress.com" } }
            ]
        },
        {
            cells: [
                { value: "Loafers", style: { "background-color": "#E5F3FF" } },
                { value: "31", style: { "background-color": "#E5F3FF" } },
                { value: "10", format: { type: "currency" }, style: { "background-color": "#E5F3FF" } },
                { value: "=B9*C9", style: { "background-color": "#E5F3FF" } },
                { value: "OUT OF STOCK", style: { "background-color": "#E5F3FF" } },
                { value: "Alibaba", hyperlink: { webAddr: "www.alibaba.com" }, style: { "background-color": "#E5F3FF" } }
            ]
        },
        {
            cells: [
                { value: "Cricket Shoes" },
                { value: "41" },
                { value: "30", format: { type: "currency" } },
                { value: "=B10*C10" },
                { value: "IN STOCK" },
                { value: "Ebay", hyperlink: { webAddr: "www.ebay.com" } }
            ]
        },
        {
            cells: [
                { value: "T-Shirts", style: { "background-color": "#E5F3FF" } },
                { value: "50", style: { "background-color": "#E5F3FF" } },
                { value: "10", format: { type: "currency" }, style: { "background-color": "#E5F3FF" } },
                { value: "=B11*C11", style: { "background-color": "#E5F3FF" } },
                { value: "OUT OF STOCK", style: { "background-color": "#E5F3FF" } },
                { value: "Amazon", hyperlink: { webAddr: "www.amazon.com" }, style: { "background-color": "#E5F3FF" } }
            ]
        },
        {
            height: 30,
            cells: [
                { style: { "background-color": "#428bca" } },
                { style: { "background-color": "#428bca" } },
                { value: "Total Amount", index: 2, style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                { value: "=Sum(D2:D11)", style: { "font-weight": "bold", "color": "#FFFFFF", "background-color": "#428bca" } },
                { style: { "background-color": "#428bca" } },
                { style: { "background-color": "#428bca" } }
            ]
        }
        ]
    }]
   
});

function loadComplete(args) {
    this.setWidthToColumns([140, 100, 100, 110, 140, 100, 110]);
}