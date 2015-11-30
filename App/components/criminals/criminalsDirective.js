/**
 * Created by barcode on 24/11/15.
 */

export function criminalDr(ngModule) {
    require("./style.css");
    function criminalsDr() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: /*@ngAnnotate*/ function ($scope, $uibModal) {
                var vm = this;
                vm.user = $scope.user;
                vm.editCriminal = function (data) {
                    var modalInstance = $uibModal.open({
                        "template": require('./editCriminal.html'),
                        "controller": /*@ngAnnotate*/ function (user) {
                            var sm = this;
                            sm.data = user;
                            sm.user = {};
                            sm.fields = [
                                {
                                    key: 'name',
                                    type: 'input',
                                    templateOptions: {
                                        type: 'text',
                                        label: 'Nombre',
                                        placeholder: 'Carlos'
                                    }
                                },
                                {
                                    key: 'alias',
                                    type: 'input',
                                    templateOptions: {
                                        type: 'text',
                                        label: 'Alias',
                                        placeholder: 'Tiro fijo'
                                    }
                                },
                                {
                                    key: 'id',
                                    type: 'input',
                                    templateOptions: {
                                        type: 'text',
                                        label: 'Identificación',
                                        placeholder: '123'
                                    }
                                }
                            ];
                            sm.ok = function () {
                                $uibModalInstance.close(sm.user);
                            };

                            sm.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            }
                        },
                        controllerAs: "sm",
                        resolve: {
                            "user": function () {
                                return data;
                            }
                        }
                    });
                    modalInstance.result.then(function(data){
                        console.log(data);
                    })
                };
            },
            template: require("./criminalsTemplate.html"),
            scope: {
                user: '='
            }
        };
    }

    ngModule.directive("criminalsDr", criminalsDr);
}