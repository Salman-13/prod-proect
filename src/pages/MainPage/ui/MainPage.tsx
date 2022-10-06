// Можно использовать BugButton чтобы проверить как будет вести себя страница при выбросе ошибки.
// import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
