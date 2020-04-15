import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import main from '../styles/main.module.css'
import ProfileImage from "./profile_image"

const ProfileBox = () => (
    <div className={main.profile_box}>
        <ProfileImage />
        <div className={main.profile_info_box}>
            <p className={main.profile_info}>장치훈(chihun jang)</p>
            <p className={main.profile_info}>벽에 그리는 키처럼 제 삶을 기록하는 곳입니다.</p>
        </div>
        
    </div>
)



export default ProfileBox
