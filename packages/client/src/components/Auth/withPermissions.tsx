// import * as React from 'react'
// import { Route } from 'react-router-dom'

// import { TUser, TUserRole } from '../../../../common/types/TUser'

// function isAllowed(props) {
//   const { permissions, user, authenticated } = props
//   const { type } = user

//   console.log('isAllowed props', props)

//   return (
//     permissions.length === 0 ||
//     permissions.some(permission => {
//       const { scope } = permission

//       if (!user) {
//         return false
//       }

//       switch (permission.scope) {
//         case 'authenticated':
//           return authenticated === true

//         case 'host':
//           return type === 'host'

//         case 'member':
//           return type === 'member'

//         case 'admin':
//           return type === 'admin'

//         default:
//           return false
//       }
//     })
//   )
// }

// function AuthState(props) {
//   return props.render(isAllowed(props))
// }

// export function withPermissions(permissions, allowedElement, notAllowedElement) {
//   function render() {
//     return (
//       <Subscribe to={[UserStore]}>
//         {user => (
//           <AuthState
//             permissions={permissions}
//             user={user}
//             render={allowed => (allowed ? allowedElement : notAllowedElement)}
//           />
//         )}
//       </Subscribe>
//     )
//   }

//   return allowedElement.type === Route ? (
//     <Route path={allowedElement.props.path} render={render} />
//   ) : (
//     render()
//   )
// }
