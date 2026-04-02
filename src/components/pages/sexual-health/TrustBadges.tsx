import {
  ShieldCheckIcon,
  ShieldIcon,
  CheckCircleIcon,
  LockIcon,
  MapPinIcon,
} from '@/components/ui/Icons'

export default function TrustBadges() {
  return (
    <section className="bg-cream py-8 border-b border-latte">
      <div className="nh-container">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <ShieldCheckIcon className="w-8 h-8 text-sage" />
            <div>
              <p className="text-xs font-bold text-chocolate tracking-wide">HIPAA</p>
              <p className="text-[10px] text-caramel">Compliant</p>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <ShieldIcon className="w-8 h-8 text-sage" />
            <div>
              <p className="text-xs font-bold text-chocolate tracking-wide">503B</p>
              <p className="text-[10px] text-caramel">Licensed Pharmacy</p>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <CheckCircleIcon className="w-8 h-8 text-sage" />
            <div>
              <p className="text-xs font-bold text-chocolate tracking-wide">BBB</p>
              <p className="text-[10px] text-caramel">Accredited Business</p>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <LockIcon className="w-8 h-8 text-sage" />
            <div>
              <p className="text-xs font-bold text-chocolate tracking-wide">256-BIT</p>
              <p className="text-[10px] text-caramel">SSL Encrypted</p>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <MapPinIcon className="w-8 h-8 text-sage" />
            <div>
              <p className="text-xs font-bold text-chocolate tracking-wide">ROYAL OAK</p>
              <p className="text-[10px] text-caramel">Michigan Office</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
