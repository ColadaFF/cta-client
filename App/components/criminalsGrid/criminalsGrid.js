/**
 * Created by barcode on 24/11/15.
 */

export function criminalsGrid(ngModule) {
    function criminalsDr() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: /*@ngAnnotate*/ function ($http) {
                var vm = this;
                console.log("called");
                $http({
                    method: "GET",
                    url: 'http://localhost:3000/api/criminals'
                })
                    .then(function (response) {
                        console.log(response.data.data);
                        vm.users = response.data.data;
                    });
            },
            template: require("./criminalsTemplate.html")
        };
    }

    ngModule.directive("criminalsGrid", criminalsDr);
}