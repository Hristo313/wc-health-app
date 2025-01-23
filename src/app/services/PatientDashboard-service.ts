import { FetchApi } from './FetchApi-service';
import { WeightType } from '../models/PatientDashboard/weight-type';
import { HeartRateType } from '../models/PatientDashboard/heart-rate-type';
import { BPSystolicDiastolicType } from '../models/PatientDashboard/bpsystolic-diastolic-type';
import { GlucoseType } from '../models/PatientDashboard/glucose-type';
import { TotalCholesterolType } from '../models/PatientDashboard/total-cholesterol-type';
import { CholesterolHDLLDLType } from '../models/PatientDashboard/cholesterol-hdlldltype';

class PatientDashboardService {
	public getWeightList = async (): Promise<WeightType[]> => {
		return await FetchApi.fetchApiResponse<WeightType[]>('https://excel2json.io/api/share/b8fb8833-7e2c-4a84-e611-08daf8ae6744', []);
	}

	public getHeartRateList = async (): Promise<HeartRateType[]> => {
		return await FetchApi.fetchApiResponse<HeartRateType[]>('https://excel2json.io/api/share/43cfd6ae-a6db-42b5-e610-08daf8ae6744', []);
	}

	public getBPSystolicDiastolicList = async (): Promise<BPSystolicDiastolicType[]> => {
		return await FetchApi.fetchApiResponse<BPSystolicDiastolicType[]>('https://excel2json.io/api/share/16761321-7913-4d05-e616-08daf8ae6744', []);
	}

	public getGlucoseList = async (): Promise<GlucoseType[]> => {
		return await FetchApi.fetchApiResponse<GlucoseType[]>('https://excel2json.io/api/share/e1b52986-0c42-4ee1-e617-08daf8ae6744', []);
	}

	public getTotalCholesterolList = async (): Promise<TotalCholesterolType[]> => {
		return await FetchApi.fetchApiResponse<TotalCholesterolType[]>('https://excel2json.io/api/share/2f36bf07-125a-4301-e612-08daf8ae6744', []);
	}

	public getCholesterolHDLLDLList = async (): Promise<CholesterolHDLLDLType[]> => {
		return await FetchApi.fetchApiResponse<CholesterolHDLLDLType[]>('https://excel2json.io/api/share/a1863711-3edb-42ae-e613-08daf8ae6744', []);
	}
}
export const patientDashboardService: PatientDashboardService = new PatientDashboardService();
