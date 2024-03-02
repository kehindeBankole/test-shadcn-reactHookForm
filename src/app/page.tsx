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

// Technologies Used:

// React Hook Form: used for form management and validation due to its simplicity, performance, and ease of integration. It provided a convenient way to handle form inputs, perform validation, and manage form state and works beatifully well with typescript.

// Shadcn: Shadcn was utilized for its pre-built components to offer a consistent design system out of the box.

// Next.js: Next.js served as the foundation for the project, providing server-side rendering.

//project was built using next 14 which server renders the app , tailwind which is css framework that allows engineers to write css in our make , create design systems , shadcn which was used for its pre-built components to offer a consistent design system out of the box and react Hook Form used for form management and validation due to its simplicity, performance, and ease of integration. It provided a convenient way to handle form inputs, perform validation, and manage form state and works beatifully well with typescript.
// the components folder contain shadcn components(ui folder) used in the project , custom components (Header and CompanyForm) and custom icons , this was done to follow shadcn default set up in order to ensure consistency in folder arrangement
// an assets folder which contains images and font assets can be found in the project
// on the design i noticed the color of the fonts was "240, 15%, 11%" , so that was set in the globals.css file to make it the default color for the app
