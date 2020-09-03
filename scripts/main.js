import { useJournalEntries, getEntries} from './JournalDataProvider.js'
import { EntryListComponent } from './JournalEntryList.js'

const allTheEntries = useJournalEntries()

for (const entry of allTheEntries) {
    console.log(entry)
}

EntryListComponent();
getEntries