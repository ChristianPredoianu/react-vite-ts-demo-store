import classes from '@/components/cards/ContactCard.module.scss';

interface ContactCardProps {
  content: string;
}

export default function ContactCard({ content }: ContactCardProps) {
  return (
    <div className={classes.contactCard}>
      <p className={classes.contactCardParagraph}>{content}</p>
    </div>
  );
}
