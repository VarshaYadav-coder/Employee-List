(function() {
  'use strict';

  /**
   * Initial listContacts list
   *
   * @type {Array}
   */
  angular.module('angularContactsListApp')
    .value('listContacts', [
      {_id: 1, name: 'Varsha Yadav', department: 'gurgaon', phone: '91919191919', title: 'SSE'},
      {_id: 2, name: 'Deepak Yadav', department: 'gurugram, Nº 102', phone: '91919191919', title: 'SSE'},
      {_id: 3, name: 'Amit singh ', department: 'gurgaon', phone: '91919191919', title: 'SSE'},
      {_id: 4, name: 'Jack singh', department: 'gurgaon', phone: '91919191919', title: 'SSE'},
      {_id: 5, name: 'Joseph  sharma', department: 'gurgaon', phone: '91919191919', title: 'SSE'},
      {_id: 6, name: 'Joshua kumar', department: 'gurgaon', phone: '91919191919', title: 'SSE'}
    ]);

}());
