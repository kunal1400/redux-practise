import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <select onChange={changeLanguage}>
            <option key="en" value="en" selected={i18n.resolvedLanguage === "en"}>English</option>
            <option key="fr" value="fr" selected={i18n.resolvedLanguage === "fr"}>French</option>
            <option key="de" value="de" selected={i18n.resolvedLanguage === "de"}>German</option>
        </select>
    );
}