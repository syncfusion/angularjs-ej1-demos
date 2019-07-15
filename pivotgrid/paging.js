syncApp.controller('PivotGridPagingCtrl', function ($scope) {
    $scope.dataSource = {
        data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        rows: [
            {
                fieldName: "[Date].[Fiscal]"
            }
        ],
        columns: [
            {
                fieldName: "[Customer].[Customer Geography]"
            }
        ],
        values: [
            {
                measures: [
                    {
                        fieldName: "[Measures].[Internet Sales Amount]"
                    }
                ],
                axis: "columns"
            }
        ],
        pagerOptions: {
            categoricalPageSize: 5,
            seriesPageSize: 5,
            categoricalCurrentPage: 1,
            seriesCurrentPage: 1
        }
    };
    $scope.isResponsive = true;
    $scope.datasource = $scope.dataSource;
    $scope.renderGrid = function (args) {
        var vScrolling, paging, rdbClient, rdbServer, pGridObj;
        vScrolling = $('#vScrolling').data("ejRadioButton"); paging = $('#paging').data("ejRadioButton"); rdbClient = $('#rdbClient').data("ejRadioButton"); rdbServer = $('#rdbServer').data("ejRadioButton");
        $(".e-pivotgrid").remove();
        $(".e-pivotpager").remove();
        var clientData = "";
        if (rdbClient.model.checked) {
            clientData = {
                data: "//bi.syncfusion.com/olap/msmdpump.dll",
                catalog: "Adventure Works DW 2008 SE", cube: "Adventure Works",
                rows: [{ fieldName: "[Customer].[Customer Geography]" }], columns: [{ fieldName: "[Date].[Date]" }],
                values: [{ measures: [{ fieldName: "[Measures].[Internet Sales Amount]" }], axis: "columns" }],
                filters: [],
                pagerOptions: {
                    categoricalPageSize: 5,
                    seriesPageSize: 5,
                    categoricalCurrentPage: 1,
                    seriesCurrentPage: 1
                }
            }
        }
        var gridPanel = ej.buildTag("div#PivotGrid", "", { height: "290px", width: "100%" })[0].outerHTML;
        if (paging.model.checked) {
            var pagerDiv = ej.buildTag("div#Pager", "", { "margin-top": "10px" })[0].outerHTML;
            $(gridPanel).appendTo(".control");
            $(pagerDiv).appendTo(".control");
            if (clientData == "")
                $("#PivotGrid").ejPivotGrid({ url: window.baseurl + "api/PivotGrid/Olap", serviceMethodSettings: { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" }, customObject: { isPaging: true } });
            else
                $("#PivotGrid").ejPivotGrid({ dataSource: clientData, enablePaging: true });
            $("#Pager").ejPivotPager({
                mode: ej.PivotPager.Mode.Both,
                targetControlID: "PivotGrid"
            });
        }
        else {
            $(gridPanel).appendTo(".control");
            $(".control").children().eq(0).height("330");
            if (clientData == "") {
                $("#PivotGrid").ejPivotGrid({ url: window.baseurl + "api/PivotGrid/Olap", serviceMethodSettings: { initialize: "Initialize", drillDown: "Drill", nodeStateModified: "ModifyNodeState", nodeDropped: "DropNode", memberExpand: "ExpandMember" }, customObject: { isPaging: true }, enableVirtualScrolling: true });
            }
            else {
                $("#PivotGrid").ejPivotGrid({ dataSource: clientData, enableVirtualScrolling: true });
            }
        }
    }
});