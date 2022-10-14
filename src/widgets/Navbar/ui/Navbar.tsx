import { t } from 'i18next';
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a fugiat sit alias officiis, mollitia dignissimos praesentium eius ipsam quis, deleniti, reprehenderit ipsum modi consectetur! Eaque quasi praesentium consequatur libero.')}
            </Modal>
        </div>
    );
};

export default Navbar;
