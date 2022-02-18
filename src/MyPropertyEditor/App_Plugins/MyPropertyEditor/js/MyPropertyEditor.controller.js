angular.module('umbraco').controller("seoEditorController", function ($scope, editorState) {

    var currentNode = editorState.getCurrent();

    if ($scope.model && $scope.model.value) {
        $scope.title = $scope.model.value.title;
        $scope.description = $scope.model.value.description;
        $scope.keyword = $scope.model.value.keyword;
    } else {

        $scope.title = "";
        $scope.description = "";
        $scope.keyword = "";

    }

    $scope.model.value = { title: $scope.title, description: $scope.description, keyword: $scope.keyword };


    $scope.$watch("title", function () {
        $scope.UpdateModel();
    });

    $scope.$watch("description", function () {
        $scope.UpdateModel();
    });

    $scope.$watch("keyword", function () {
        $scope.UpdateModel();
    });

    $scope.UpdateModel = function () {
        $scope.model.value = { title: $scope.title, description: $scope.description, keyword: $scope.keyword };
    };

    $scope.getTitle = function () {

        var title = '';

        if ($scope.title && $scope.title !== '') {
            title = $scope.title;
        }
        else {
            if (currentNode && currentNode.variants) {
                title = currentNode.variants[0].name;
            } else {
                title = '';
            }

        }

        // Only append suffix if we have a value to render.
        if (title === '') {
            return title;
        }

    };
});