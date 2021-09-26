import layout from '../styles/Layout.module.scss';

export default function Privacy() {
  return (
    <div className={layout.container}>
      <main>
        <h1>Personvern</h1>
        <h3>Intro</h3>
        <p>
          Hei! Jeg regner med ikke alt for mange finner veien til denne siden,
          men kult at du gjorde det. Mitt navn er Tomas, og det er jeg som har
          bygget teltturer på fritiden min. Jeg har vært dypt opptatt av privacy
          de siste årene, og jeg har fulgt de etiske prinsippene det innebærer
          under arbeidet med denne siden. <br/><br/>Teltturer.no bruker
          https://plausible.io/ for innsikt og statestikk om bruk av nettsiden.
          Det er en mer GDPR og privacy rettet plattform enn for eksempel Google
          Analytics. Siden bruker også Vercel Analytics
          (https://vercel.com/analytics) for å kunne forbedre nettsidens ytelse.<br/><br/>
          Siden bruker Google Adsense til å servere reklame på utvalgte
          plasseringer. Her har jeg mindre kontroll over hvordan data blir
          behandlet og må følge Goggle sine rettningslinjer. <br/><br/>Alt av persondata
          knyttet til kjøp å betaling må tas vare på ved eventuelle feile eller
          tilbakebetalinger. Disse blir trygt lagret gjennom Heroku, Vipps eller
          Stripe, og blir kun brukt ved behov om det oppstår kundeproblemer. Du
          kan selv slette disse ved å slette kontoen din på Min Side. <br/><br/>Telttur
          bruker ikke epost eller nyhetsbrev eller noen annen form for
          kunde-kommunikasjon der vi trenger å lagre kontaktsopplysninger om
          deg. Dette pga. den enkle grunn at jeg finner det vært irriterende
          selv. <br/><br/>Om du ikke allerede har det, så anbefaler jeg Ublock Origin og
          NordVPN for tryggere nettsurfing.
        </p>
        <h3>Personvernerklæring for Teltturer.no</h3>
        <p>
          1. Behandlingsansvarlig<br/><br/> Tomas Roaldsnes er på vegne av Teltturer.no
          behandlingsansvarlig for selskapets behandling av personopplysninger.
          <br/><br/>2. Personopplysninger som lagres<br/><br/> Vi lagrer følgende personopplysninger
          om våre kunder:Vi lagrer i tillegg kjøpshistorikk og adferdsmønster på
          vår nettside, dvs. opplysninger om hvordan den enkelte kunde navigerer
          på siden. <br/><br/>3. Formål med behandlingen<br/><br/> Vi behandler opplysningene for å
          kunne gjennomføre våre forpliktelser etter avtale med deg. Vi lagrer i
          tillegg kjøpshistorikk og adferdsmønster på vår nettside, dvs.
          opplysninger om hvordan den enkelte kunde navigerer på siden. <br/><br/>4.
          Grunnlaget for behandlingen<br/><br/> Informasjon om navn, adresse, telefon,
          e-postadresse benyttes for å oppfylle kjøpsavtalen. Grunnlaget for
          denne behandlingen er personvernforordningens artikkel Art 6 (b). Der
          du har samtykket til det benyttes kjøpshistorikk og adferdsmønster til
          å gi anbefalinger og reklame spesielt tilpasset deg som bruker.
          Grunnlaget for denne behandlingen er personvernforordningen Art 6 (a).
          Du kan når som helst trekke tilbake ditt samtykke til slik bruk. <br/><br/>5.
          Innhenting av personopplysninger<br/><br/> Vi lagrer de personopplysningene du
          har avgitt våre ansatte i forbindelse med ditt kjøp.Vi bruker
          informasjonskapsler/cookies på våre nettsider for å gi deg som besøker
          siden best kundeopplevelse og service.Lov om elektronisk kommunikasjon
          krever at vi informerer våre besøkende om bruk av informasjonskapsler
          (cookies). Les mer om bruk av informasjonskapsler her: <br/><br/>6. Utlevering
          av opplysninger til tredjeparter<br/><br/> Vi vil ikke dele, selge, overføre
          eller på annen måte utlevere personopplysninger til andre, med mindre
          vi er rettslig forpliktet til det. <br/><br/>7. Sletting av personopplysninger<br/><br/>
          Opplysninger vi har mottatt i forbindelse med ditt kjøp lagres i vårt
          aktive kunderegister i 3,5 år.Du kan når som helst slette
          informasjonen vi har om deg ved å gå til Min Side og slette kontoen
          din. <br/><br/>8. Rettigheter for den registrerte<br/><br/> Vi behandler dine
          personopplysninger i henhold til personopplysningsloven og gjeldende
          forskrifter. Det gjøres oppmerksom på at du kan kreve innsyn i og
          flytting av egne personopplysninger, samt kreve retting eller sletting
          av opplysninger. Det kan klages til Datatilsynet på behandling i strid
          med reglene. <br/><br/>9. Personvernombud<br/><br/> Vi har et personvernombud, Tomas
          Roaldsnes, som påser at personopplysningslovens regler om behandling
          av personopplysninger blir fulgt.Kontaktes på tomroa@pm.me 10.
          Informasjonssikkerhet Vi sikrer dine personopplysninger ved både
          fysisk og virtuell adgangs- og tilgangskontroll, samt ved kryptering
          av sensitive deler av avgitte opplysninger. Vi lagrer minst mulig
          informasjon om deg. <br/><br/>Kontaktinformasjon<br/><br/> Henvendelser om hvilke
          opplysninger som er registrert, retting og sletting kan sende
          skriftlig til følgende adresser: tomroa@pm.me <br/><br/>Tomas Roaldsnes
          Turbinveien 40, 0195 Oslo
        </p>
      </main>
    </div>
  );
}
