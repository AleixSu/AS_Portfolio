import Button from '../../components/UI/buttons/Button'
import { textAndTitles } from '../../constants/portfolioTextAndTitles'
import { profileInfo } from '../../constants/profileInfo'
import { useLanguageContext } from '../../context/languageContext'
import './Home.css'
profileInfo
const Home = () => {
  const { currentLanguage, setLanguage } = useLanguageContext()
  const textAndTitlesCL = textAndTitles[currentLanguage]
  const profileInfoCL = profileInfo[currentLanguage]
  return (
    <section id='main'>
      <article id='mainInfo'>
        <div id='h1Div'>
          <div id='info'>
            <div id='languageSwitcherDiv'>
              <img
                className='worldImg'
                src='./images/worldwide.png'
                alt='worldImg'
              />
              <Button
                text={'EN'}
                className={`languageSwitcher ${currentLanguage === 'EN' && 'selected'}`}
                fnc={() => {
                  setLanguage('EN')
                }}
                id={'buttonEN'}
              />
              <Button
                text={'ES'}
                className={`languageSwitcher ${currentLanguage === 'ES' && 'selected'}`}
                fnc={() => setLanguage('ES')}
                id={'buttonES'}
              />
            </div>
            <div id='languageSwitcher'></div>
            <h1 id='intro'>FullStack Developer</h1>
            <p id='introP'>{profileInfoCL.mainUserInfo}</p>
            <div id='buttonContact'>
              <Button
                text={textAndTitlesCL.buttonMain}
                className={'contactButtonDark'}
                fnc={() =>
                  window.scrollTo({
                    top: document.getElementById('contactMeContent').offsetTop,
                    behavior: 'smooth'
                  })
                }
              />
            </div>
          </div>
        </div>
        <div id='ImgDiv'>
          <div id='filterDiv'>
            <img
              id='profilePict'
              className='backgroundPhoto'
              src={profileInfoCL.profileIMG}
              alt='profilePict'
            />
          </div>
          <img
            id='profileIMG'
            src={profileInfoCL.profileIMG}
            alt='profilePict'
          />
        </div>
      </article>
      <div id='decoDiv'></div>
    </section>
  )
}

export default Home
