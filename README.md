## Start
###Install dependencies:
```
yarn install
```
or
```
npm install
```
###Run dev server:
```
yarn start
```
or
```
npm start
```
Open the link: http://localhost:3011/

##Mock Back-end
We use ``axios-mock-adapter`` for demo purpose, it intercepts axios requests and redirects to mocked handlers.
add mock data in ``__mock__`` folder

1. Make mock code as the below 
```
export function mockTop(mock: MockAdapter) {
    mock.onGet(GET_CHART).reply(() => {
        const data = [
            {
                name: 'Desktops',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 6, 8, 10],
                color: 'yellow',
            },
            {
                name: 'Desktops',
                data: [10, 51, 85, 51, 59, 92, 69, 11, 90, 6, 8,25],
            },
        ]
        return [200, data]
    })
 }
```
2. Add mock to ``mockAxios`` 
```
export default function mockAxios(axios: AxiosInstance) {
  const mock = new MockAdapter(axios, {delayResponse: 300})
  mockAuth(mock)
  mockTop(mock)
  mockRecord(mock)
  mockColumn(mock)
  return mock
}
```

### Axios and Redux
1. Add API integration in file ``*CRUD.ts``
2. Add Redux code like **action** and **reducer** to ``*Redux.ts``

## Make a page
Here is the example on how to create your own page and add it to the left side menu and breadcrumbs.

1. Create page component ``src/app/pages/TopPage.tsx``
```
import React from "react";
                  
export function TopPage() {
    return <h1>Hello!</h1>
}
export {TopPage}
```
2. Update Update `src/app/routing/PrivateRoutes.tsx`
```
import React, {Suspense, lazy} from 'react'
...
+ import {TopPage} from "../pages/TopPage";

export function PrivateRoutes() {
 

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/top' component={TopPage} />
       ...
      </Switch>
    </Suspense>
  )
}

```
3. Add menu item to Header Menu `src/_metronic/layout/components/header/MenuInner.tsx`.
```
+<MenuItem title='Top Page' to='/top' />
```
4. Add menu item to Aside Menu `src/_metronic/layout/components/aside/AsideMenuMain.tsx`.
```
+<AsideMenuItem to="/top" title="Top Page" />
```
5. Refer **Bootstrap** framework to layout and implement UI
