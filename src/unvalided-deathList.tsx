
import React from "react";
import styles from "./unvalided-death.scss";
import { useTranslation } from "react-i18next";


import DeathList from "./deathList";


const UnvalidedDeathList: React.FC = () => {
  const { t } = useTranslation();

  let headers = [
    {
      key: 'No_dossier',
      header: t('No_dossier','No dossier')
    },
    {
      key: 'firstName',
      header: t('firstName','Nom')
    },
    {
      key: 'lastName',
      header: t('lastName','Prenom')
    },
    {
      key: 'birth',
      header: t('birth','Date de naisssance')

    },
    {
      key: 'gender',
      header: t('gender','Sexe')
    },
    {
      key: 'habitat',
      header: t('habitat','habitat')
    },
    {
      key: 'residence',
      header: t('residence','residence')
    },
    {
      key: 'occupation',
      header: t('occupation','occupation')
    },
    {
      key: 'etat_civil',
      header: t('etat_civil','etat civil')
    },
    {
      key: 'deathDay',
      header: t('deathDay','Date de mort')
    }

  ];

  return (
    <div className={styles.container}>

      <section>
        <h5> {t('list label')}</h5>
        <DeathList headers={headers} />
      </section >
    </div >
  );
};

export default UnvalidedDeathList;