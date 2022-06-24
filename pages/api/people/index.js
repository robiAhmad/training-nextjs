import { people } from '@/jsonfiles/dataPeople'

export default function handler(req, res) {
  res.status(200).json(people)
}
