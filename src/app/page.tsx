import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TABS } from '@/app-constants';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CompanyForm from '@/components/CompanyForm';

export default function Home() {
  return (
    <main className='px-6 lg:px-28'>
      <h2 className='font-semibold text-[1.75rem]'>Settings</h2>
      <ScrollArea className='lg:w-fit whitespace-nowrap rounded-md'>
        <Tabs defaultValue={TABS[0]} className='mt-8 '>
          <TabsList className={`flex overflow-x-auto`}>
            {TABS.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab}
                className='whitespace-nowrap'
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <ScrollBar orientation='horizontal' hidden />
      </ScrollArea>

      <div className='mt-8'>
        <CompanyForm />
      </div>
    </main>
  );
}
