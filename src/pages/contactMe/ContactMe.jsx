import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { textAndTitles } from '../../constants/portfolioTextAndTitles'
import './ContactMe.css'
import Button from '../../components/UI/buttons/Button'
import { useLanguageContext } from '../../context/languageContext'

const ContactMe = () => {
  const [status, setStatus] = useState('idle')
  const { currentLanguage } = useLanguageContext()
  const textAndTitlesCL = textAndTitles[currentLanguage]

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (values) => {
    setStatus('loading')
    try {
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      ])
      setStatus('success')
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id='contactMeContent' className='contactMeContent'>
      <div className='contactMeDiv'>
        <h2 className='contactMeTitle'>{textAndTitlesCL.contactMeH2}</h2>
        <article id='contactMeInfoDiv'>
          <h4>{textAndTitlesCL.contactMeH4}</h4>
          <p>{textAndTitlesCL.contactMeText}</p>
        </article>
        <article id='contactMeForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputPackDiv'>
              <div className='inputDiv'>
                <label htmlFor='name'>{textAndTitlesCL.contactMeLabelN}</label>
                <input
                  id='name'
                  placeholder={textAndTitlesCL.contactMePH1}
                  {...register('name', { required: textAndTitlesCL.errorName })}
                />
                {errors.name && (
                  <span className='errorMsg'>{errors.name.message}</span>
                )}
              </div>

              <div className='inputDiv'>
                <label htmlFor='email'>{textAndTitlesCL.contactMeLabelE}</label>
                <input
                  id='email'
                  type='email'
                  placeholder={textAndTitlesCL.contactMePH2}
                  {...register('email', {
                    required: textAndTitlesCL.errorEmail
                  })}
                />
                {errors.email && (
                  <span className='errorMsg'>{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className='inputMessageDiv'>
              <label htmlFor='message'>{textAndTitlesCL.contactMeLabelM}</label>
              <textarea
                id='message'
                placeholder={textAndTitlesCL.contactMePH3}
                {...register('message', {
                  required: textAndTitlesCL.errorMessage
                })}
              />
              {errors.message && (
                <span className='errorMsg'>{errors.message.message}</span>
              )}
            </div>

            <div id='sendMessageButton'>
              <Button
                type={'submit'}
                text={
                  status === 'loading'
                    ? textAndTitlesCL.formLoadingText
                    : textAndTitlesCL.contactMeSend
                }
                className={'contactButtonLight'}
              />
            </div>

            {status === 'success' && (
              <p className='statusMsg success'>
                {textAndTitlesCL.successfullForm}
              </p>
            )}
            {status === 'error' && (
              <p className='statusMsg error'>
                {textAndTitlesCL.unsuccessfullForm}
              </p>
            )}
          </form>
        </article>
      </div>
    </section>
  )
}

export default ContactMe
