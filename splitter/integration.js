

syncApp.controller('SplitterCtrl', function ($scope) {
    $scope.proper = [{ paneSize: "50%" }, {}]
})

function treeClicked(sender, args) {
            if (sender.currentElement.hasClass('_child')) {
                var content = $('.' + sender.currentElement[0].id).html();
                $('._content').html(content);
            }
        }