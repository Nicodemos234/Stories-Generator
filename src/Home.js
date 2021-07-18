import React, { useState } from 'react'
import domtoimage from 'dom-to-image'
import styled from 'styled-components'
import blankImage from './assets/img/blank.png'
import backImage from './assets/img/back.png'

const EditorArea = styled.div`
    height: 1920px;
    width: 1080px;
`

const Title = styled.input`
    position: absolute;
    z-index: 3;
    left: 0px;
    width: 1080px;
    text-align: center;
    top: 1140px;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-size: 38px;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
`

const MainImageWrapper = styled.div`
    position: absolute;
    top: 113px;
    left: 70px;
    width: 940px;
    height: 943px;
    justify-content: center;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        z-index: 1;
    }
`

const MainMenu = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 10px;
    display: flex;
    flex-flow: column;
`

const ImageInput = styled.input`
    border: none;
    background: linear-gradient( 90deg, #0c4aff, #0c85ff);
    color: white;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 20px;
    box-shadow: 0px 0px 15px -3px rgb(28 91 255 / 77%);
    cursor: pointer;
    outline: none;
`
const Button = styled.button`
    border: none;
    background: linear-gradient( 90deg, #0c4aff, #0c85ff);
    color: white;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 20px;
    box-shadow: 0px 0px 15px -3px rgb(28 91 255 / 77%);
    cursor: pointer;
    outline: none;
`


const BackgroundImageWrapper = styled.div`
    position: relative;
    z-index: 2;
`

export default function Home() {
    const [mainImage, setMainImage] = useState(blankImage)
    const [title, setTitle] = useState('Insira o título')

    const handleImageUpload = (event) => {
        const objectInput = event.target
        const files = objectInput.files
        if (FileReader && files && files.length) {
            const fr = new FileReader()
            fr.onload = function () {
                setMainImage(fr.result)
            }
            fr.readAsDataURL(files[0])
        }
    }

    const handleSaveImage = () => {
        domtoimage.toPng(document.getElementById('editor-area'), { quality: 1 })
            .then(function (dataUrl) {
                var link = document.createElement('a')
                link.download = title + '.png'
                link.href = dataUrl
                link.click()
            })
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (<>
        <EditorArea id="editor-area">
            <Title value={title} onInput={handleTitleChange}></Title>
            <MainImageWrapper>
                <img alt="main image" src={mainImage} />
            </MainImageWrapper>
            <BackgroundImageWrapper>
                <img src={backImage} />
            </BackgroundImageWrapper>
        </EditorArea>
        <MainMenu>
            <Button onClick={handleSaveImage}>Salvar</Button>
            <ImageInput onChange={handleImageUpload} type="file" accept="image/*"></ImageInput>
        </MainMenu>
    </>)
}