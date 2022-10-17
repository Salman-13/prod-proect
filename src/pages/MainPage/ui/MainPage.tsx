// Можно использовать BugButton чтобы проверить как будет вести себя страница при выбросе ошибки.
// import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/input/Input';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <hr />
        </div>
    );
}

export default MainPage;
