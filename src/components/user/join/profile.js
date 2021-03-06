import React from "react";
import style from './profiles.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';

const cx=classNames.bind(style);



class Profile extends React.Component {
 
    onClickFileOpenHandler=e=>{
        console.log('onClickFileOpenHandler');
        e.preventDefault();
        this.fileOpen.click();
    };
  onImagePreviewHandler = e => {
      console.log('onImagePreviewHandler');
     
      console.log(this.img);
    if (e.target.files && e.target.files[0]) {
     
     
      let reader = new FileReader();

      reader.onload=()=>{
          this.img.setAttribute("src", reader.result);
          console.log(reader.result);
      };
    reader.readAsDataURL(e.target.files[0]);
    return;
    }

  };
  getImgFile=()=>{
    const {files} = this.fileOpen;
    if(files&&files[0] ){
      console.log('before :', files[0]);
      let formData = new FormData();
        formData.append('profile', files[0]);
        return formData;
      
    }else {
      let formData = new FormData();
      formData.append('profile', '/static/media/default_profile.002ff40d.png');
      console.log(formData.get('profile'));
      return formData;
    }
  }

  render() {
    return (
      <div className={cx("profile")}>
        <div onClick={this.onClickFileOpenHandler.bind(this)}>
        <img id="profile" src="/static/media/default_profile.002ff40d.png" ref={ref => (this.img = ref)} alt="profile" />
            <Fab color="primary" aria-label="Add" >
                <AddIcon/>
        </Fab>
        </div>
        <input type="file" onChange={this.onImagePreviewHandler.bind(this)} ref={(ref)=>(this.fileOpen=ref)}/>
      </div>
    );
  }
}

export default Profile;