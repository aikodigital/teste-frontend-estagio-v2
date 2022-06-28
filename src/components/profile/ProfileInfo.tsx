import Image from "next/image"
// STYLES
import { Container } from "@styles/profile/profileInfo"
// TYPES
import { iProfileInfo } from "src/@types/components"



const ProfileInfo = ({vehicleImg, nameImg, equipmentInfo}: iProfileInfo): JSX.Element => {
      
    return(
    <Container>
        {/* IMAGE */}
        <div>
            <Image src={vehicleImg || ''} alt={nameImg} height={202} width={300} priority={false} layout="responsive"/>
        </div>

        {/* INFORMATIONS */}
        <span>
            <span>
                <h1>Nome</h1>
                <p>{equipmentInfo.name}</p>
            </span>
            <span>
                <h1>modelo</h1>
                <p>{equipmentInfo.model}</p>
            </span>
            <span>
                <h1>estado</h1>
                <p>{equipmentInfo.state}</p>
            </span>
        </span>
    
    </Container>)
}

export default ProfileInfo
