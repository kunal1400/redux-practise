import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <select onChange={changeLanguage}>
            <option value="en" selected={i18n.resolvedLanguage === "en"}>English</option>
            <option value="fr" selected={i18n.resolvedLanguage === "fr"}>French</option>
            <option value="de" selected={i18n.resolvedLanguage === "de"}>German</option>
        </select>
    );
}