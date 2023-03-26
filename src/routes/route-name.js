export const RootRoute = '/'
export const LoginRoute = 'login'
export const RegisterRoute = 'register'
export const HobbiesRoute = 'hobbies'
export const CreateTripStepsRoute = {
  name: 'create-trip',
  childs: {
    type: 'type',
    location: 'location',
    detail: 'detail'
  }
}
export const ProfileRoute = {
  name: 'profile',
  childs: {
    images: 'images',
    trips: 'trips',
    shop: 'shop'
  }
} 
