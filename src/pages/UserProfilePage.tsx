import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import { Loader2 } from "lucide-react"

const UserProfilePage = () => {
  
  const { isLoading: isGetLoading, currentUser} = useGetMyUser()
  const { isLoading: isUpdateLoading, updateUser } = useUpdateMyUser()

  if (isGetLoading) {
    return <div className=" flex justify-center items-center mt-10">
      <Loader2 color="orange" className="w-10 h-10 animate-spin" />
    </div>

  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>
  }
  
  return (
    <UserProfileForm 
      onSave={updateUser} 
      isLoading={isUpdateLoading} 
      currentUser={currentUser}
    />
  )
}

export default UserProfilePage
