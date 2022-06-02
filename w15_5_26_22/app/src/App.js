import { useState } from "react";
import styled from "styled-components";
import "./App.css";

const Card = styled.div`
  width: 80vw;
  height: auto;
  background: white;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7));
  margin: 0;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
`;

const Form = styled.form`
  flex: 0 0 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 5px solid #000;

  > div {
    width: 100%;
    margin: 1rem 0;
  }
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.86);
  padding: 1rem;
`;
const FormLabel = styled.label`
  text-align: left;
  display: block;
  margin: 0 auto 0 0.5rem;
  font-weight: 600;
`;
const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.86);
  resize: none;
`;
const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #000;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.15s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: rgba(255, 255, 255, 0.86);
      font-size: 20px;
      font-weight: 600;
    }
  }

  &:hover {
    cursor: pointer;
    .overlay {
      opacity: 1;
    }
  }
`;
const Bio = styled.p``;
const DisplayName = styled.strong`
  font-size: 3rem;
`;
const Username = styled.p`
  font-size: 2rem;
`;
const Preview = styled.div`
  flex: 0 0 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input[type="file"] {
    display: none;
  }
`;

function App() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("https://via.placeholder.com/300");

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateDisplayName = (e) => {
    setDisplayName(e.target.value);
  };
  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const handleFile = (e) => {
    const { files } = e.target;
    console.log(
      "🚀 ~ file: index.html ~ line 183 ~ handleFile ~ file",
      files
    );
    let reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        // document.getElementById("preview").setAttribute("src", reader.result);
        // files[0].src = reader.result;
        setAvatarPreview(reader.result)
      },
      false
    );
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="App">
      <Card>
        <Form>
          <h2>Edit Profile</h2>
          <div>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
              name="username"
              id="username"
              value={username.split(" ").join("_")}
              onChange={updateUsername}
            />
          </div>
          <div>
            <FormLabel htmlFor="display_name">Display Name</FormLabel>
            <FormInput
              name="display_name"
              id="display_name"
              value={displayName}
              onChange={updateDisplayName}
            />
          </div>
          <div>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <FormTextarea
              name="bio"
              id="bio"
              value={bio}
              onChange={updateBio}
            />
          </div>
        </Form>
        <Preview>
          <input type="file" name="avatar" id="avatar" onChange={handleFile}/>
          <Avatar>
            <img src={avatarPreview} />
            <label className="overlay" htmlFor="avatar">
              <p>Change Avatar</p>
            </label>
          </Avatar>
          <DisplayName>{displayName || "Sid Codes"}</DisplayName>
          <Username>@{(username || "Sid Codes").split(" ").join("_")}</Username>
          <Bio>
            {bio ||
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis distinctio fugiat enim voluptates perspiciatis cum id vero necessitatibus et, facilis ipsa consequatur quos dolor excepturi error exercitationem, sapiente atque tempore?"}
          </Bio>
        </Preview>
      </Card>
    </div>
  );
}

export default App;
