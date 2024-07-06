import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { authControllerGetSessionInfo, authControllerSignIn } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiHeader } from '@/shared/ui/ui-header';

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className={`min-h-screen`}>
      <UiHeader right={<div>{data?.email}</div>} />
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">
        Sign Out
      </UiButton>
      <UiTextField label="Text Field" inputProps={{ placeholder: 'Enter email...' }} />
      <UiTextField error="Text Field" inputProps={{ placeholder: 'Enter email...' }} />
      <UiTextField inputProps={{ placeholder: 'Enter email...' }} />
      <UiSelectField
        options={[
          { value: '1', label: 'options 1' },
          { value: '2', label: 'options 2' },
        ]}
      />
      <UiLink href={'/'}>Link</UiLink>
      <UiSpinner className="text-teal-600 w-20 h-20" />
      {/* <UiPageSpinner /> */}
    </main>
  );
}
