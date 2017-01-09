(function() {
  'use strict';

  /**
   * Initial listContacts list
   *
   * @type {Array}
   */
  angular.module('angularContactsListApp')
    .value('listContacts', [
      {_id: 1, name: 'Varsha Yadav', address: 'gurgaon', phone: '91919191919'},
      {_id: 2, name: 'Deepak Yadav', address: 'gurugram, Nº 102', phone: '91919191919'},
      {_id: 3, name: 'Amit singh ', address: 'gurgaon', phone: '91919191919'},
      {_id: 4, name: 'Jack singh', address: 'gurgaon', phone: '91919191919'},
      {_id: 5, name: 'Joseph  sharma', address: 'gurgaon', phone: '91919191919'},
      {_id: 6, name: 'Joshua kumar', address: 'gurgaon', phone: '91919191919'}
    ]);

}());
