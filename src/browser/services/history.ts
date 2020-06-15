import { StorageFactory } from '../storage-factory';
import {
  IVisitsDetails,
  IVisitItem,
  IHistorySearchDetails,
  IHistoryItem,
  IHistoryAddDetails,
  IHistoryDeleteRange,
  PageTransition,
} from '~/interfaces';
import { extensions } from '../extensions';
import { HistoryServiceBase } from '~/common/services/history';

export class HistoryService extends HistoryServiceBase {
  private invoker = StorageFactory.create('history');

  private constructor() {
    super();
    extensions.history.start(this);
  }

  public static start() {
    return new HistoryService();
  }

  public search = (details: IHistorySearchDetails) =>
    this.invoker<IHistoryItem[]>('search', details);

  public getVisits = (details: IVisitsDetails) =>
    this.invoker<IVisitItem[]>('get-visits', details);

  public addUrl = (details: IHistoryAddDetails) =>
    this.invoker('add-url', details);

  public addCustomUrl = (url: string, transition: PageTransition) =>
    this.invoker('add-custom-url', url, transition);

  public deleteUrl = (details: IHistoryAddDetails) =>
    this.invoker('delete-url', details);

  public deleteRange = (range: IHistoryDeleteRange) =>
    this.invoker('delete-range', range);

  public deleteAll = () => this.invoker('delete-all');
}
