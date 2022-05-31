import ContactForm from '@/components/forms/ContactForm';
import ContactCard from '@/components/cards/ContactCard';
import Footer from '@/components/layout/footer/Footer';
import classes from '@/pages/Contact.module.scss';

export default function Contact() {
  return (
    <>
      <div className="container">
        <h1 className={classes.primaryHeading}>
          Say <span className={classes.headingSpan}>Hello</span>
        </h1>
        <div className={classes.mainContent}>
          <main className={classes.main}>
            <ContactForm />
            <div className={classes.contactInfo}>
              <ContactCard content="(913) 125154" />
              <ContactCard content="shopdrip@shopdrip.com" />
              <ContactCard content="123 Woodstreet Palms, Los Angeles" />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
