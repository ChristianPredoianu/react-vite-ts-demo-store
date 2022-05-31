import { useForm } from 'react-hook-form';
import classes from '@/components/forms/ContactForm.module.scss';
import classNames from 'classnames';

interface ContactFormProps {
  name: string;
  description: string;
  email: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      email: '',
    },
  });

  function onSubmit(data: ContactFormProps) {
    console.log(data);
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputLine}>
          <p className={classes.inputParagraph}>Hello there, my name is</p>
          <input
            type="text"
            placeholder="your name here..."
            className={classNames(classes.input, {
              [`${classes.invalid}`]: errors.name?.message,
            })}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 4,
                message: 'Name must include min 4 characters',
              },
            })}
          />
        </div>
        <div className={classes.textareaLine}>
          <p className={classes.inputParagraph}>I need help with</p>
          <textarea
            className={classNames(classes.input, {
              [`${classes.invalid}`]: errors.description?.message,
            })}
            rows={3}
            cols={33}
            placeholder="short description..."
            {...register('description', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Description must include min 10 characters',
              },
            })}
          ></textarea>
        </div>
        <div className={classes.inputLine}>
          <p className={classes.inputParagraph}>You can reach me at</p>
          <input
            type="email"
            placeholder="your email..."
            className={classNames(classes.input, {
              [`${classes.invalid}`]: errors.email?.message,
            })}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        <input type="submit" className={classes.submit} />
        {errors.name?.message && (
          <span className={classes.inputError}>{errors.name?.message}</span>
        )}
        {errors.description?.message && (
          <span className={classes.inputError}>
            {errors.description?.message}
          </span>
        )}
        {errors.email?.message && (
          <span className={classes.inputError}>{errors.email?.message}</span>
        )}
      </form>
    </div>
  );
}
