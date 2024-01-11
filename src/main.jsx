import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



 const datas= [
      {
          "_id": "659bae71d2045197a0f62c65",
          "name": "Inventory",
          "checks": [
              {
                  "_id": "659bb3b6e33e449514fadab4",
                  "tcode": "GS0090",
                  "create": true,
                  "update": false,
                  "delete": true,
                  "read": true,
                  "createdAt": "2024-01-08T08:35:02.376Z",
                  "updatedAt": "2024-01-10T03:59:20.319Z",
                  "__v": 0,
                  "name": "CREDIT_CONTROL"
              },
              {
                  "_id": "659bb5370b109433a298b61b",
                  "tcode": "GS0092",
                  "create": true,
                  "update": true,
                  "delete": false,
                  "read": true,
                  "createdAt": "2024-01-08T08:41:27.017Z",
                  "updatedAt": "2024-01-10T03:59:54.431Z",
                  "__v": 0,
                  "name": "COMPANY"
              },
              {
                  "_id": "659bfbafb15acb726ca4ded9",
                  "tcode": "GS0093",
                  "name": "STORAGE_POINT",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T13:42:07.091Z",
                  "updatedAt": "2024-01-10T04:00:20.889Z",
                  "__v": 0
              },
              {
                  "_id": "659c005ab15acb726ca4def8",
                  "tcode": "GS0094",
                  "name": "LOADING_POINT",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T14:02:02.250Z",
                  "updatedAt": "2024-01-10T04:00:40.294Z",
                  "__v": 0
              },
              {
                  "_id": "659c1f5cb15acb726ca4e006",
                  "tcode": "GS000999",
                  "name": "PLANT_POINT",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T16:14:20.805Z",
                  "updatedAt": "2024-01-10T04:01:12.534Z",
                  "__v": 0
              },
              {
                  "_id": "659d24d03c0de7eb3071a231",
                  "tcode": "GS00901",
                  "name": "DIVISION",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-09T10:49:52.344Z",
                  "updatedAt": "2024-01-10T04:01:29.533Z",
                  "__v": 0
              },
              {
                  "_id": "659e12fac02f5d546b2e483f",
                  "tcode": "GS0097",
                  "name": "SALES_0FFICE",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T03:46:02.570Z",
                  "updatedAt": "2024-01-10T03:46:02.570Z",
                  "__v": 0
              },
              {
                  "_id": "659e139dc02f5d546b2e484e",
                  "tcode": "GS0098",
                  "name": "SHIP_POINT",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T03:48:45.166Z",
                  "updatedAt": "2024-01-10T03:48:45.166Z",
                  "__v": 0
              },
              {
                  "_id": "659e1564c02f5d546b2e4865",
                  "tcode": "GS0099",
                  "name": "SALES_ORG",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T03:56:20.190Z",
                  "updatedAt": "2024-01-10T03:56:20.190Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bb5d60b109433a298b620",
          "name": "WareHouse",
          "checks": [
              {
                  "_id": "659bb5e30b109433a298b622",
                  "tcode": "GS0017",
                  "create": true,
                  "update": true,
                  "delete": false,
                  "read": true,
                  "createdAt": "2024-01-08T08:44:19.001Z",
                  "updatedAt": "2024-01-08T08:44:19.001Z",
                  "__v": 0
              },
              {
                  "_id": "659bb5e70b109433a298b625",
                  "tcode": "GS0018",
                  "create": false,
                  "update": true,
                  "delete": false,
                  "read": true,
                  "createdAt": "2024-01-08T08:44:23.056Z",
                  "updatedAt": "2024-01-08T11:12:13.190Z",
                  "__v": 0
              },
              {
                  "_id": "659bf1acb15acb726ca4de47",
                  "tcode": "t3",
                  "name": "test3",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T12:59:24.910Z",
                  "updatedAt": "2024-01-08T12:59:24.910Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda4250fe05bd919d7ba4",
          "name": "Logistic General",
          "checks": [
              {
                  "_id": "659bf02cc57779c0ba875e44",
                  "tcode": "GS00101",
                  "create": true,
                  "update": true,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T12:53:00.167Z",
                  "updatedAt": "2024-01-08T12:53:00.167Z",
                  "__v": 0
              },
              {
                  "_id": "659bf1f4b15acb726ca4de4c",
                  "tcode": "GS00102",
                  "name": "Log1",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T13:00:36.560Z",
                  "updatedAt": "2024-01-08T13:00:36.560Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda5850fe05bd919d7ba6",
          "name": "Inquiry",
          "checks": [
              {
                  "_id": "659c0be5b15acb726ca4df5c",
                  "tcode": "GS20001",
                  "name": "ENG1",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T14:51:17.148Z",
                  "updatedAt": "2024-01-08T14:51:17.148Z",
                  "__v": 0
              },
              {
                  "_id": "659c0effb15acb726ca4df6f",
                  "tcode": "GS20002",
                  "name": "log3",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T15:04:31.438Z",
                  "updatedAt": "2024-01-08T15:04:31.438Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda6750fe05bd919d7ba8",
          "name": "Purchasing",
          "checks": [
              {
                  "_id": "659bf29eb15acb726ca4de6c",
                  "tcode": "GS01001",
                  "name": "Purchasing1",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T13:03:26.922Z",
                  "updatedAt": "2024-01-08T13:03:26.922Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda6f50fe05bd919d7baa",
          "name": "Physical Inventory",
          "checks": [
              {
                  "_id": "659bf239b15acb726ca4de57",
                  "tcode": "GS0012",
                  "name": "Physical Inventory 1",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T13:01:45.471Z",
                  "updatedAt": "2024-01-08T13:01:45.471Z",
                  "__v": 0
              },
              {
                  "_id": "659e93421ba40a760c1ad5b0",
                  "tcode": "GS301",
                  "name": "PLANT_PRM",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:53:22.206Z",
                  "updatedAt": "2024-01-10T12:53:22.206Z",
                  "__v": 0
              },
              {
                  "_id": "659e93531ba40a760c1ad5bb",
                  "tcode": "GS302",
                  "name": "NUMBER_ASSIGN",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:53:39.746Z",
                  "updatedAt": "2024-01-10T12:53:39.746Z",
                  "__v": 0
              },
              {
                  "_id": "659e936e1ba40a760c1ad5c6",
                  "tcode": "GS303",
                  "name": "SET_GOODS_MOM",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:54:06.132Z",
                  "updatedAt": "2024-01-10T12:54:06.132Z",
                  "__v": 0
              },
              {
                  "_id": "659e93cf1ba40a760c1ad5d9",
                  "tcode": "GS304",
                  "name": "GOODS_ISSUE/TRNSF_POST",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:55:43.471Z",
                  "updatedAt": "2024-01-10T12:55:43.471Z",
                  "__v": 0
              },
              {
                  "_id": "659e93dd1ba40a760c1ad5e4",
                  "tcode": "GS305",
                  "name": "GOOD_RCT",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:55:57.264Z",
                  "updatedAt": "2024-01-10T12:55:57.264Z",
                  "__v": 0
              },
              {
                  "_id": "659e93ef1ba40a760c1ad5ef",
                  "tcode": "GS306",
                  "name": "AUTO_MOM",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-10T12:56:15.897Z",
                  "updatedAt": "2024-01-10T12:56:15.897Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda7c50fe05bd919d7bac",
          "name": "Sales Order",
          "checks": [
              {
                  "_id": "659c126cb15acb726ca4dfa6",
                  "tcode": "GS00912",
                  "name": "g10",
                  "create": false,
                  "update": false,
                  "delete": false,
                  "read": false,
                  "createdAt": "2024-01-08T15:19:08.686Z",
                  "updatedAt": "2024-01-08T15:19:08.686Z",
                  "__v": 0
              }
          ]
      },
      {
          "_id": "659bda8950fe05bd919d7bae",
          "name": "Sales & Distribution",
          "checks": []
      },
      {
          "_id": "659bdaa550fe05bd919d7bb0",
          "name": "Assign Enterprise Structure ",
          "checks": []
      }
  ]


ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
