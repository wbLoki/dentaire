import { Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { useLocale } from 'next-intl';
import { useRouter } from '../navigation';

type Props = {}

const languages: { [key: string]: string } = {
    en: "us",
    ar: "ma",
    fr: "fr",
    es: "es"
};

function LangSelector({}: Props) {
    const router = useRouter();
    const locale = useLocale();

    return (
        <Select
            aria-label='Select country'
            className="w-36"
            defaultSelectedKeys={[locale as "fr" | "es" | "en" | "ar"]}
            variant={"underlined"}
            size='sm'
            classNames={{
                mainWrapper: "h-full",
            }}
            selectedKeys={[locale]}
            onSelectionChange={(e) => {e.currentKey && router.replace('/', {locale: e.currentKey as "fr" | "es" | "en" | "ar"});}}
            endContent={<Image alt={locale} width={24} height={24} className='w-6 object-cover' src={`https://flagcdn.com/${languages[locale]}.svg`} />}
        >
            <SelectItem
                key="fr"
                startContent={<Image alt="France" width={24} height={24} className="w-6" src="https://flagcdn.com/fr.svg" />}
            >
                Francais
            </SelectItem>
            <SelectItem
                key="en"
                startContent={<Image alt="United States" width={24} height={24} className="w-6" src="https://flagcdn.com/us.svg" />}
            >
                English
            </SelectItem>
            <SelectItem
                key="es"
                startContent={<Image alt="Spain" width={24} height={24} className="w-6" src="https://flagcdn.com/es.svg" />}
            >
                Español
            </SelectItem>
            <SelectItem
                key="ar"
                startContent={<Image alt="Morocco" width={24} height={24} className="w-6" src="https://flagcdn.com/ma.svg" />}
            >
                العربية
            </SelectItem>
        </Select>
    )
}

export default LangSelector