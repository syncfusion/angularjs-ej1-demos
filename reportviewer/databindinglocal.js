syncApp.controller('DataBindingLocalCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.localMode = ej.ReportViewer.ProcessingMode.Local;
    $scope.rdlcReportPath = 'IndicatorReport.rdlc';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };

    $scope.onReportLoaded = function (senderobj) {
        var desc2013 = [
            {
                No: 1, Name: "Carlos Slim", NetWorth: 73.0, Age: 73, CitizenShip: "Mexico", Source: "Telmex,America Movil, Grupo Carso", RankingStatus: 50, ProfitStatus: 75
            },
            {
                No: 2, Name: "Bill Gates", NetWorth: 67.0, Age: 57, CitizenShip: "United States", Source: "Microsoft", RankingStatus: 50, ProfitStatus: 75
            },
            {
                No: 3, Name: "Amancio Ortega", NetWorth: 57.0, Age: 57, CitizenShip: "Spain", Source: "Inditex Group", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 4, Name: "Warren Buffett", NetWorth: 53.0, Age: 82, CitizenShip: "United States", Source: "Berkshire Hathaway", RankingStatus: 25, ProfitStatus: 75
            },
            {
                No: 5, Name: "Larry Ellison", NetWorth: 43.0, Age: 68, CitizenShip: "United States", Source: "Oracle Corporation", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 6, Name: "Charles Koch", NetWorth: 34.0, Age: 77, CitizenShip: "United States", Source: "Koch Industries", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 7, Name: "David Koch", NetWorth: 34.0, Age: 72, CitizenShip: "United States", Source: "Koch Industries", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 8, Name: "Li Ka-shing", NetWorth: 32.0, Age: 84, CitizenShip: "Hong Kong/ Canada", Source: "Cheung Kong Holdings", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 9, Name: "Liliane Bettencourt", NetWorth: 30.0, Age: 90, CitizenShip: "France", Source: "L'Oreal", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 10, Name: "Bernard Arnault", NetWorth: 29.0, Age: 63, CitizenShip: "France", Source: "LVMH Moet Hennessy Louis Vuitton", RankingStatus: 25, ProfitStatus: 25
            }];
        var desc2012 = [
            {
                No: 1, Name: "Carlos Slim", NetWorth: 69.0, Age: 72, CitizenShip: "Mexico", Source: "Telmex,America Movil, Grupo Carso", RankingStatus: 50, ProfitStatus: 25
            },
            {
                No: 2, Name: "Bill Gates", NetWorth: 61.0, Age: 56, CitizenShip: "United States", Source: "Microsoft", RankingStatus: 50, ProfitStatus: 75
            },
            {
                No: 3, Name: "Warren Buffett", NetWorth: 44.0, Age: 81, CitizenShip: "United States", Source: "Berkshire Hathaway", RankingStatus: 50, ProfitStatus: 25
            },
            {
                No: 4, Name: "Bernard Arnault", NetWorth: 41.0, Age: 63, CitizenShip: "France", Source: "LVMH Moet Hennessy Louis Vuitton", RankingStatus: 50, ProfitStatus: 75
            },
            {
                No: 5, Name: "Amancio Ortega", NetWorth: 37.5, Age: 75, CitizenShip: "Spain", Source: "Inditex Group", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 6, Name: "Larry Ellison", NetWorth: 36.0, Age: 67, CitizenShip: "United States", Source: "Oracle Corporation", RankingStatus: 25, ProfitStatus: 75
            },
            {
                No: 7, Name: "Eike Batista", NetWorth: 30.0, Age: 55, CitizenShip: "Brazil", Source: "EBX Group", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 8, Name: "Stefan Persson", NetWorth: 26.5, Age: 64, CitizenShip: "Sweden", Source: "H&M", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 9, Name: "Li Ka-shing", NetWorth: 25.0, Age: 83, CitizenShip: "Hong Kong/ Canada", Source: "Cheung Kong Holdings", RankingStatus: 75, ProfitStatus: 75
            },
            {
                No: 10, Name: "Karl Albrecht", NetWorth: 25.4, Age: 92, CitizenShip: "Germany", Source: "Aldi", RankingStatus: 75, ProfitStatus: 25
            }];
        var description = [
            {
                Status: 25, Description: "Has not changed from the previous ranking."
            },
            {
                Status: 50, Description: "Has increased from the previous ranking."
            },
            {
                Status: 75, Description: "Has decreased from the previous ranking."
            }];
        var reportObj = $('#container').data("ejReportViewer");
        reportObj.model.dataSources = [
            {
                value: ej.DataManager(desc2013).executeLocal(ej.Query()),
                name: "DataSet1"
            },
            {
                value: ej.DataManager(desc2012).executeLocal(ej.Query()),
                name: "DataSet2"
            },
            {
                value: ej.DataManager(description).executeLocal(ej.Query()),
                name: "DataSet3"
            }];
    }
});